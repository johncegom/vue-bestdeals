<template>
  <div>
    <Header :showcases="showcases"/>
    <div class="wrapper">
      <Carousel :showcases="showcases"/>
      <Showcase title="Flash Sales" :showcases_s="showcases[0]" :showcases="showcases"/>
      <Showcase title="New Arrival" :showcases_s="showcases[1]" :showcases="showcases"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Showcase from "../components/Showcase";
import Carousel from "../components/Carousel";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {db} from '../firebase.js';

export default {
  name: "Home",
  components: {
    Showcase,
    Carousel,
    Header,
    Footer
  },
  data() {
    return {
      test: [],
      showcases: [
        // First showcase
        [
          {
            brand: "Nike React",
            title: "Nike React Element 87",
            img:
              "https://cdn.shopify.com/s/files/1/2031/6995/products/AQ1090004_1_1280x.jpg?v=1539175782",
            saleprice: "2.800.000",
            price: "2.950.000",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Nike",
            title: "Nike Epic React Flyknit 2",
            img: "https://i1.adis.ws/i/jpl/jd_1204269_a?qlt=80&w=600&h=425&v=1",
            saleprice: "3.590.000",
            price: "3.789.000",
            sizes: [
              42, 43
            ]
          },
          {
            brand: "Yeezy",
            title: "Yeezy Static v2 700",
            img:
              "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F12%2Fadidas-yeezy-boost-700-v2-static-store-list-1-e1545536030742.jpg?q=75&w=800&cbr=1&fit=max",
            saleprice: "10.990.000",
            price: "11.567.890",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Nike",
            title: "Nike Zoom Fly",
            img:
              "http://justfreshkicks.com/wp-content/uploads/2018/05/Nike-Zoom-Fly-Be-True.jpg",
            saleprice: "2.700.000",
            price: "2.890.000",
            sizes: [
              40, 41, 42
            ]
          },
          {
            brand: "Nike",
            title: "Classic Cortez",
            img:
              "https://i.ebayimg.com/images/g/7r4AAOSwJ-pa-M2T/s-l640.jpg",
            saleprice: "1.850.000",
            price: "1.900.000",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Nike Air Max 1",
            title: "Air Max 1",
            img:
              "http://ordixi.com/wp-content/uploads/2019/04/giay-chay-bo-Nike-Air-Max-1-Wolf-Grey-WhiteAH8145-003-5-600x400.jpg",
            saleprice: "2.750.000",
            price: "2.765.000",
            sizes: [
              40.5, 41, 42, 42.5, 43
            ]
          },
          {
            brand: "Reebok",
            title: "Classic Phase 1",
            img:
              "https://i.pinimg.com/originals/f9/35/6d/f9356d6acb513d4a49988b4d337e039e.jpg",
            saleprice: "1.390.000",
            price: "1.540.000",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "New Balance",
            title: "New Balance 574",
            img:
              "https://www.streetprorunning.com/images/cargador/productos/imagen-2-17419-c97e3628-7534-NORMAL.jpg",
            saleprice: "1.845.000",
            price: "2.000.000",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Converse",
            title: "Chuck Taylor 1970s Low",
            img:
              "https://bizweb.dktcdn.net/thumb/1024x1024/100/339/085/products/162058-5.png",
            saleprice: "1.550.000",
            price: "1.900.000",
            sizes: [
              40, 41, 42, 43
            ]
          }
        ],
        // Second showcase
        [
          {
            brand: "Converse",
            title: "Chuck 70 Psy-Kicks High",
            img:
              "https://converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/164209c/164209.jpg",
            saleprice: "1.700.000",
            price: "",
            sizes: [
              39.5, 40, 41, 42, 42.5
            ]
          },
          {
            brand: "Adidas",
            title: "NMD R1",
            img:
              "https://khogiaythethao.vn/wp-content/uploads/2019/02/adidas-nmd-r1-black-sf.jpg",
            saleprice: "2.890.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Converse",
            title: "One Star Academy",
            img:
              "https://converse.com.vn/pictures/catalog/products/sneakers/cons/163270v/163270VA1.jpg",
            saleprice: "10.990.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Adidas",
            title: "Samba OG",
            img:
              "https://www.orangejungle.de/106296-tm_large_default/adidas-originals-samba-classic-og-mig-vintage-white-core-black-gum.jpg",
            saleprice: "2.800.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "New Balance",
            title: "Numeric 505",
            img:
              "https://cdn.skatedeluxe.com/images/product_images/3d_images/101698/101698_NewBalanceNumeric_505_1.jpg",
            saleprice: "1.850.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Converse",
            title: "Chuck Taylor All Star 70",
            img:
              "https://oriasshop.cdn.shoprenter.hu/custom/oriasshop/image/cache/w900h500/Term%C3%A9kek/f%C3%A9rfi%20cip%C5%91k/Converse/M9613_01-500x500.jpg?lastmod=1497348212.1498566185",
            saleprice: "1.400.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Adidas Stan Smith",
            title: "Adidas Stan Smith",
            img: "http://yanki.info.tr/UrunImages/M20325-1.jpg",
            saleprice: "1.600.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          },
          {
            brand: "Vans",
            title: "Vans SK8-Hi Pro",
            img:
              "https://deszkascuccok.cdn.shoprenter.hu/custom/deszkascuccok/image/cache/w900h500wt1/15%20vans%20cip%C5%91/sk8-hi-blk1.jpg?lastmod=-62169987600.1502784957",
            saleprice: "1.500.000",
            price: "",
            sizes: [
              39, 41, 42
            ]
          },
          {
            brand: "Converse",
            title: "Jack Purcell Jack Wanderer",
            img:
              "https://www.converse.com.vn/pictures/catalog/products/sneakers/jack-purcell/162563c/162563.jpg",
            saleprice: "1.500.000",
            price: "",
            sizes: [
              40, 41, 42, 43
            ]
          }
        ]
      ]
    }
  },
  firestore() {
		return {
			test: db.collection('shoes')
		}
	}
};
</script>


