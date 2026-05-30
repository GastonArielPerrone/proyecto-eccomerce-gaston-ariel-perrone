import { db } from "../firebase/config";
import {
    collection,
    getDocs
} from "../firebase/firestore";

const productsRef = collection(db, "products");

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return productsFormat;
    } catch (error) {
        console.log("Error al traer productos:", error);
        return [];
    }
}

export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "products", id);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() };
            console.log("Doc:", product);
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.log("Error al traer producto por ID:", error);
        return null;
    }
}