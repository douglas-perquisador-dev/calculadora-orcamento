function ForgotPassword() {
    return (
        <div className="signup-container">
          <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
                <div className="container">
                <div className="row justify-content-center form-bg-image">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="signin-inner my-3 my-lg-0 bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500">
                            <h1 className="h3">Forgot your password?</h1>
                            <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                            <form action="#">
                            <div className="mb-4">
                                <label for="email">Your Email</label>
                                <div className="input-group"><input type="email" className="form-control" id="email" placeholder="john@company.com" required autofocus /></div>
                            </div>
                            <div className="d-grid"><button type="submit" class="btn btn-gray-800">Recover password</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
   );
}

export default ForgotPassword;