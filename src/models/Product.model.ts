import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

class product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type: DataType.FLOAT(6, 2)
    })
    price: number

    @Column({

    })
    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
}

export default product
