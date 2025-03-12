import colors from 'colors'
import app from "./server";

const port = process.env.PORT || 4001
app.listen(4001, () => {
    console.log(colors.yellow(`REST API en el puerto ${port}`))
})