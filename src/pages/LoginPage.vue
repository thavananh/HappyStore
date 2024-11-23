<script setup>
    import LoginPic1 from '@/assets/images/login/login_pic1.svg';
</script>

<template>
    <section style="background-color: #95c1d1; height: 100vh">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img :src="LoginPic1"
                         class="img-fluid" alt="Phone image">
                </div>
                <div class="col-lg-8 col-xl-5 offset-xl-1">
                    <form>
                        <!-- Email input -->
                        <div>
                            <label for="validationDefault01" class="form-label fs-5" style="color: black; font-weight: bold">User name</label>
                            <input type="text" class="form-control is-invalid" id="validationDefault01" required />
                            <div class="invalid-feedback">This field is required.</div>
                        </div>
                        <div class="mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label fs-5" style="color: black; font-weight: bold">Password</label>
                            <div class="col">
                                <input type="password" class="form-control" id="inputPassword">
                            </div>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-lg btn-block" style="width: 100%">Sign in</button>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                               role="button">
                                <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                            </a>
                            <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                               role="button">
                                <i class="fab fa-twitter me-2"></i>Continue with Twitter
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .divider:after,
    .divider:before {
        content: "";
        flex: 1;
        height: 1px;
        background: #eee;
    }
    #inputPassword {
        width: 100%;
    }
</style>
