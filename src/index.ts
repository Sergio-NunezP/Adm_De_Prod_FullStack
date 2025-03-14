import colors from 'colors'
import app from "./server";

const port = process.env.PORT || 4002
app.listen(port, () => {
    console.log(colors.yellow(`REST API en el puerto ${port}`))
})