const List = () => {
    const items = [{
        id: 1,
        name: 'Chris'
    },
    {
        id: 2,
        name: 'Fabio'
    },
    {
        id: 3,
        name: 'Maria'
    }]

    return (
        <div>
            {items.map((item) => (
                <p>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )
}

export default List;