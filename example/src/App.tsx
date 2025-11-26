import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        @ehfuse/mui-label-select
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <HomePage />
            </Container>
        </>
    );
}

export default App;
