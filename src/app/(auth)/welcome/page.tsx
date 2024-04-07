import Image from "next/image";

import Logo from "@/app/assets/logos/main.png";
import WelcomeImage from "@/app/assets/welcome.png";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <body className="welcomeBg app-blank bgi-size-cover bgi-position-center bgi-no-repeat">
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-center flex-column-fluid">
          <div className="d-flex flex-column flex-center text-center p-10">
            <div className="card card-flush w-md-650px py-5">
              <div className="card-body py-15 py-lg-20">
                <div className="mb-7">
                  <a href="/" className="">
                    <Image alt="Logo" src={Logo} width={100} height={100} />
                  </a>
                </div>

                <h1 className="fw-bolder text-gray-900 mb-5">
                  Welcome to Metronic
                </h1>

                <div className="fw-semibold fs-6 text-gray-500 mb-7">
                  This is your opportunity to get creative and make a name
                  <br />
                  that gives readers an idea
                </div>

                <div className="mb-0">
                  <Image
                    src={WelcomeImage}
                    className="mw-100 mh-300px theme-light-show"
                    alt=""
                    width={100}
                    height={100}
                  />
                  
                </div>

                <div className="mb-0">
                  <Link href="/dashboard" className="btn btn-sm btn-primary">
                    Go To Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default WelcomePage;
