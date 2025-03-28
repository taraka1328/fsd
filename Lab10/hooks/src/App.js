import React, {useState} from 'react'

function ViewItems() {
    const [item, setItem] = useState(""); 
    const [items, setItems] = useState([]);
    const handleAddItem = () => { 
        setItems([...items, {"item":item}]); 
        setItem("");
    };

    const handleDelete = (item) => {
        const fitems = items.filter((it) => it.item !== item.item); 
        setItems([...fitems]);
    };

const tdata = items.map((it, index) => (
    <tr key={index}>
        <td cellpadding="20px">
        <span>{it.item}   </span>
        </td>
        <td>
        <button onClick={() => handleDelete(it)}>x</button>
        </td>
    </tr>

    ), []
);

return (
<div>
<input type="text" size="20" value={item} onChange={(e) => setItem(e.target.value)}
/>

<button onClick={() => handleAddItem()}>Add</button>
<h1>useState() Demo</h1>
<h1>Add User List</h1>
<table border=" " align="center">{tdata}</table>
</div>
);
}

export default ViewItems;
