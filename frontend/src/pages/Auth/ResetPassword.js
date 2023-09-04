function ResetPassword() {
  return (
    <div className="signup-container">
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center form-bg-image">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500">
                <h1 className="h3 mb-4">Reset password</h1>
                <form action="#">
                  <div className="mb-4">
                    <label for="email">Your Email</label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="example@company.com"
                        id="email"
                        required
                        disabled="disabled"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label for="password">Your Password</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon2">
                        <svg
                          className="icon icon-xs text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        id="password"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label for="confirm_password">Confirm Password</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon2">
                        <svg
                          className="icon icon-xs text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                        id="confirm_password"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">
                      Reset password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;
