import Items from '../Items/Items'

function ItemList({ itemList, deleteItem, updateItem }) {
   const deleteLoop = () => {
        for (let item of itemList) {
            // console.log('items to delete: ', item)
            deleteItem(item);
        }
    }

    return (
        <>
        <h1>Shopping List</h1>
        <button onClick={deleteLoop}>Clear</button>
            <ul>
                {itemList.map(item =>
                // Items rendered from Items component
                    <Items
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />

                   
                )}
            </ul>
            
        </>
    )
}; 

export default ItemList;