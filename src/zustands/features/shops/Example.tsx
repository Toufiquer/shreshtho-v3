import {
  useGetDataQuery,
  useCreateDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
  ShopsDataDefault,
  ShopsData,
  initialData,
} from '@/zustands/features/shops/useShops'
import { useState } from 'react'

const MyComponent = () => {
  const {
    data: shopData,
    setData,
    addData,
    updateItem,
    deleteItem,
  } = useGetDataQuery()
  const [createShop] = useCreateDataMutation()
  const [updateShop] = useUpdateDataMutation()
  const [deleteShop] = useDeleteDataMutation()
  const [newShop, setNewShop] = useState<ShopsData>(ShopsDataDefault) // Use ShopsDataDefault and ShopsData interface
  const [shopIdToUpdate, setShopIdToUpdate] = useState<string>('')
  const [updatedShopAddress, setUpdatedShopAddress] = useState<string>('')
  const [shopIdToDelete, setShopIdToDelete] = useState<string>('')

  const handleAddShop = () => {
    const newItem: ShopsData = { ...newShop, id: String(Date.now()) } // Ensure id is added and type is ShopsData
    addData(newItem)
    setNewShop(ShopsDataDefault) // Reset form after adding
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewShop({ ...newShop, [e.target.name]: e.target.value })
  }

  const handleUpdateShop = (id: string) => {
    updateItem(id, { address: 'Updated Description' }) // Example of partial update
  }

  const handleDeleteShop = (id: string) => {
    deleteItem(id)
  }

  const handleSetData = () => {
    setData(initialData)
  }
  const handleUpdateShopIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopIdToUpdate(e.target.value)
  }

  //

  const handleUpdateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedShopAddress(e.target.value)
  }

  const handleDeleteShopIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopIdToDelete(e.target.value)
  }

  const handleUpdateShopSubmit = () => {
    if (!shopIdToUpdate) {
      alert('Please enter Shop ID to update.')
      return
    }
    updateItem(shopIdToUpdate, { address: updatedShopAddress }) // Example of partial update
    setShopIdToUpdate('')
    setUpdatedShopAddress('')
  }

  const handleDeleteShopSubmit = () => {
    if (!shopIdToDelete) {
      alert('Please enter Shop ID to delete.')
      return
    }
    deleteItem(shopIdToDelete)
    setShopIdToDelete('')
  }

  return (
    <div>
      <h1>Shops</h1>
      <button onClick={handleSetData}>Set Initial Data</button>
      <ul>
        {shopData.map((shop) => (
          <li key={shop.id}>
            {shop.shopName} - {shop.address}
            <button onClick={() => handleUpdateShop(shop.id)}>
              Update Description
            </button>
            <button onClick={() => handleDeleteShop(shop.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add Shop</h2>
      <input
        type="text"
        name="shopName"
        placeholder="Shop Name"
        value={newShop.shopName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={newShop.address}
        onChange={handleInputChange}
      />
      <button onClick={handleAddShop}>Add Shop</button>

      {/* Create Shop Section */}
      <div>
        <h2>Create Shop</h2>
        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          value={newShop.shopName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newShop.address}
          onChange={handleInputChange}
        />
        <button onClick={handleAddShop}>Create Shop</button>
      </div>

      {/* Update Shop Section */}
      <div>
        <h2>Update Shop Address</h2>
        <input
          type="text"
          placeholder="Shop ID to Update"
          value={shopIdToUpdate}
          onChange={handleUpdateShopIdChange}
        />
        <input
          type="text"
          placeholder="New Address"
          value={updatedShopAddress}
          onChange={handleUpdateInputChange}
        />
        <button onClick={handleUpdateShopSubmit}>Update Shop Address</button>
      </div>

      {/* Delete Shop Section */}
      <div>
        <h2>Delete Shop</h2>
        <input
          type="text"
          placeholder="Shop ID to Delete"
          value={shopIdToDelete}
          onChange={handleDeleteShopIdChange}
        />
        <button onClick={handleDeleteShopSubmit}>Delete Shop</button>
      </div>
    </div>
  )
}

export default MyComponent
