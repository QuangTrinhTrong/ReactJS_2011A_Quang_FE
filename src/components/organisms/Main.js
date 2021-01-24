import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Validate from './../../helpers/Validate';
function Main(props) {
  return (
    <div>
      <Validate />
      <div>
        <Sidebar />
        <div className="c-wrapper c-fixed-components">
          <Header />
          <div className="c-body">
            <main className="c-main">
              <div className="container-fluid">
                {props.children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;