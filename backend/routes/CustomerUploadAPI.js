import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid'
import { Router } from 'express'
import bodyParser from 'body-parser';

const router = new Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });

router.post('/api/customer/info/upload', upload.single('image'), async (req, res) => {
    const folderPath = './backend/images/users/' + req.body.CustomerID + '/avatar';
    fs.access(folderPath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(folderPath, { recursive: true });
        } else {
            // Xoá ảnh cũ
            fs.readdir(folderPath, (err, files) => {
                if (err) {
                    console.log(err);
                } else {
                    files.forEach((file) => {
                        fs.unlink(path.join(folderPath, file), (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    });
                }
            });
        }
        const filename = uuidv4() + '-' + req.file.originalname;
        fs.renameSync(req.file.path, path.join(folderPath, filename));
        console.log(req.body.CustomerID)
        console.log('upload image');
        res.sendStatus(201);
    });
});

router.get('/api/customer/info/avatar', (req, res) => {
    if (req.user) {
        console.log(req.user.CustomerID);
        const folderPath = path.resolve(`./backend/images/users/${req.user.CustomerID}/avatar`); //Make absolute path
        console.log(folderPath);

        try {
            const files = fs.readdirSync(folderPath);
            if (files.length === 0) {
                res.status(404).send('Không tìm thấy ảnh');
            } else {
                const filePath = path.join(folderPath, files[0]);
                res.sendFile(filePath);
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Lỗi tải ảnh');
        }
    } else {
        return res.sendStatus(400);
    }
});
export default router;
