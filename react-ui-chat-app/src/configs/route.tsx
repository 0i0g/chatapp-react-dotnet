import {Navigate, useRoutes} from "react-router-dom";
import {ElementType, lazy, Suspense} from "react";
import LoadingScreen from "../components/loading-screen/LoadingScreen";
import MainLayout from "../components/layout/MainLayout";

const Loadable = (Component: ElementType) => (props: any) => {

  return (
      <Suspense fallback={<LoadingScreen/>}>
        <Component {...props} />
      </Suspense>
  );
}

export const Router = () =>
    useRoutes([
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={'chat'}/>,
          },
          {
            path: 'chat',
            element: <ChatPage/>
          }, {
            path: 'dashboard',
            element: <ChatPage/>
          }, {
            path: 'profile',
            element: <ChatPage/>
          },
        ]
      },
    ]);

const ChatPage = lazy(() => import('../pages/ChatPage'));
