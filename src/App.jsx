import AuthProvider from "./auth/AuthContext";
import ChatProvider from "./context/Chat/ChatContext";
import { SocketProvider } from "./context/SockectContext";
import UiProvider from "./context/UiContext";
import AppRouter from "./router/AppRouter";
// import moment from "moment";
// import "moment/locale/fr";
// moment.locale("fr");
function App() {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <UiProvider>
            <AppRouter />
          </UiProvider>
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
}

export default App;
