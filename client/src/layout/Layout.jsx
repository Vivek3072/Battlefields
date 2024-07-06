import RightBar from "../components/sidebar/RightBar";
import Sidebar from "../components/sidebar/Sidebar";
import { PropTypes } from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row grid-cols-10">
      <div className="w-full md:w-16 h-20 md:h-screen border-r border-gray-500">
        <Sidebar />
      </div>

      <main className="overflow-y-scroll h-screen w-full px-5 md:px-10 py-3">
        {children}
      </main>
      <div className="w-full md:w-16 h-20 md:h-screen border-l border-gray-400">
        <RightBar />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
