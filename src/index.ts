import colors from 'colors'
import app from "./server";

const port = process.env.PORT || 4000
app.listen(4000, () => {
    console.log(colors.yellow(`REST API en el puerto ${port}`))
})