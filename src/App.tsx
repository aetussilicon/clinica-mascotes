import "./App.css";
import { UserMenuProvider } from "./context/userMenu";
import { SignupProvider } from "./context/useSignupForm";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <UserMenuProvider>
        <SignupProvider>
          <AppRoutes />
        </SignupProvider>
      </UserMenuProvider>
    </>
  );
}

export default App;
