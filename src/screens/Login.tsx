import { useEffect, useState } from 'react';
import { NativeModules, AppState, View, Button } from 'react-native';

const { LoginModule } = NativeModules;

export const useGoogleSignIn = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const appStateChangeListener = AppState.addEventListener(
            'change',
            newAppState => {
                if (newAppState === 'active') {
                    // Recibe el resultado del proceso de inicio de sesión de Google
                    LoginModule.handleSignInResult();
                }
            },
        );
        return () => {
            appStateChangeListener.remove();
        };
    }, []);

    const login = () => {
        // Inicia el flujo de inicio de sesión de Google
        LoginModule.login();
    };

    const logout = () => {
        // Cierra la sesión de Google
        LoginModule.logout();
        setUser(null);
    };

    return { user, login, logout };
};

// En tu componente, puedes usar el hook de la siguiente manera:

const MyComponent = () => {
    const { user, login, logout } = useGoogleSignIn();

    return (
        <View>
            {user ? (
                <Button title="Logout" onPress={logout} />
            ) : (
                <Button title="Login" onPress={login} />
            )}
        </View>
    );
};

