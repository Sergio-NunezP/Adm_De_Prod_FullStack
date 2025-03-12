import colors from 'colors'
import app from "./server";

const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(colors.yellow(`REST API en el puerto ${port}`))
})