import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = collection(db, 'products');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {products.map(product => {
                        if (product.id === itemId) {
                            return <ItemDetail key={product.id} {...product} />;
                        }
                        return null;
                    })}
                </>
            )}
        </div>
    );
}

export default ItemDetailContainer;
