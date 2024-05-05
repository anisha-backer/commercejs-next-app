export class ProductServices{
    static getProducts = async () => {
        try{
            let productsResponse = await fetch('https://api.chec.io/v1/products', {
            method: "GET",
            headers: {
                'X-Authorization': 'pk_565025ba1fcf3591a0064a11ededd5c2cabaae1739c9c',
            }
            });
            const data = await productsResponse.json();
            return data.data;
        }catch(error){
            console.log('Something wrong',error);   
        }
    }
    static getProductById = async (id:string) => {
        try{
            let productsResponse = await fetch('https://api.chec.io/v1/products/'+id, {
            method: "GET",
            headers: {
                'X-Authorization': 'pk_565025ba1fcf3591a0064a11ededd5c2cabaae1739c9c',
            }
            });
            const data = await productsResponse.json();
            return data;
        }catch(error){
            console.log('Something wrong',error);
        }
    }
    static getCategory = async (id:string) => {
        try {
            const response = await fetch('https://api.chec.io/v1/categories/'+id,{
                method: "GET",
                headers: {
                    'X-Authorization': 'pk_565025ba1fcf3591a0064a11ededd5c2cabaae1739c9c',
                    Accept: "application/json",
                            "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            return data.slug;

        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    static addToCart = async (prodId:any) => {
        const response = await fetch("https://api.chec.io/v1/carts/cart_gnZO5kyejKw7MN", {
        method: "POST",
        headers: {
            "X-Authorization": "pk_565025ba1fcf3591a0064a11ededd5c2cabaae1739c9c",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "id": prodId,
            quantity: 1
        })
        })
        return response;
    }
    static removeCartItem = async (prodId:string) => {
        const response = await fetch(`https://api.chec.io/v1/carts/cart_gnZO5kyejKw7MN/items/${prodId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": "pk_565025ba1fcf3591a0064a11ededd5c2cabaae1739c9c",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id:"cart_gnZO5kyejKw7MN",
            id: prodId
        })
        })
        const data = await response.json();
        return data;
    }
    static fetchingCartProducts = async () =>{
        const response = await fetch("https://api.chec.io/v1/carts/cart_gnZO5kyejKw7MN", {
          method: "GET",
          headers: {
              "X-Authorization": "pk_565025ba1fcf3591a0064a11ededd5c2cabaae1739c9c",
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
      })
      const data = await response.json();
      return data;
    }
}