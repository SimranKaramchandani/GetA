export class Product
{
    productid: number;
    productname: string;
    productseller: string;
    productprice:number;
    productbname:string;
    productcurrentbid:number;
    productcurrentbidder:string;
    producttotalbis:number;    
    productauctiondate:Date;
    // productImage:File;

    constructor()
    {
        this.productid=null
        this.productname=""
        this.productseller=""
        this.productprice=null
        this.productbname="";
        this.productcurrentbid=null;
        this.productcurrentbidder="";
        this.producttotalbis=0;     
        this.productauctiondate=null
        // this.productImage = new File(null,'../../assets/images.jpg');

    }

}