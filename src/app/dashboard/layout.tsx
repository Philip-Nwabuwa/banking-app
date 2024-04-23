import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import ScrollToTop from '@/components/common/ScrollToTop'
import Sidebar from '@/components/common/Sidebar'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div
      className="body app-default tw-min-h-screen"
      id="kt_app_body"
      data-kt-app-sidebar-enabled="true"
      data-kt-app-sidebar-fixed="true"
      data-kt-app-sidebar-push-header="true"
      data-kt-app-sidebar-push-toolbar="true"
      data-kt-app-sidebar-push-footer="true"
      data-kt-app-toolbar-enabled="true"
    >
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <Navbar />
          <div className="app-wrapper flex-column flex-row-fluid">
            <Sidebar />
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              {children}
              {/* <Footer /> */}
            </div>
          </div>
        </div>
        <ScrollToTop />

      </div>
    </div>
  )
}

export default layout
