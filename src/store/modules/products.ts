import axios from "axios";
import type { Product } from "@/types";
type State = {
  products: Product[];
  isLoading: boolean;
  cart: Product[];
};

const state = () =>
  ({
    products: [],
    isLoading: false,
    cart: [],
  } as State);

// getters
const getters = {
  getProducts(state: State) {
    return state.products;
  },
  getIsLoading(state: State) {
    return state.isLoading;
  },
  getCart(state: State) {
    return state.cart;
  },
};

const actions = {
  async fetchProducts(ctx: any) {
    ctx.commit("setIsLoading", true);
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=20"
      );
      ctx.commit("setProducts", response.data.products);
    } catch (e) {
      console.log(e);
    } finally {
      ctx.commit("setIsLoading", false);
    }
  },
  addInCart(ctx: any, payload: Product) {
    ctx.commit("setCart", payload);
  },
};

const mutations = {
  setProducts(state: State, products: Product[]) {
    state.products = products;
  },
  setIsLoading(state: State, isLoading: boolean) {
    state.isLoading = isLoading;
  },
  setCart(state: State, product: Product) {
    state.cart = [...state.cart, product];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
