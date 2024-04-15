import Image from 'next/image'
import Link from 'next/link'

import ErrorPic from '@/assets/images/404-error.png'

const NotFound = () => {
  return (
    <body
      id="kt_body"
      className="erorrBg app-blank bgi-size-cover bgi-position-center bgi-no-repeat"
    >
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-center flex-column-fluid">
          <div className="d-flex flex-column flex-center text-center p-10">
            <div className="card card-flush w-lg-650px py-5">
              <div className="card-body py-15 py-lg-20">
                <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
                <div className="fw-semibold fs-6 text-gray-500 mb-7">
                  We can&apos;t find that page.
                </div>
                <div className="tw-w-full tw-flex tw-items-center tw-justify-center mb-3">
                  <Image
                    src={ErrorPic}
                    className="mw-100 mh-300px theme-light-show"
                    alt="404 page Image"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mb-0">
                  <Link href="/" replace className="btn btn-sm btn-primary">
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default NotFound
