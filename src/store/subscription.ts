import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';
import { Product } from '@/feature/dashboard/types/Products';
import { Package } from '@/feature/dashboard/types/Packages';
import { GetSubscriptionSummaryResponse } from '@/feature/dashboard/types';

type SubscriptionStore = {
  state: {
    name: string;
    stepIndex: number;
    selectedProduct?: Product;
    selectedPackage?: Package;
    summary?: GetSubscriptionSummaryResponse;
  };
  setProduct: (product: Product | undefined) => void;
  setPackage: (productPackage: Package | undefined) => void;
  setSummary: (summary: GetSubscriptionSummaryResponse | undefined) => void;
  setStepIndex: (index: number) => void;
  resetSubscriptionState: () => void;
};

const initialState = {
  name: '',
  stepIndex: 0,
  selectedProduct: undefined,
  selectedPackage: undefined,
  summary: undefined,
};

export const subscriptionStore = proxy<SubscriptionStore>({
  state: initialState,
  setProduct: (product) => {
    subscriptionStore.state.selectedProduct = product;
  },
  setPackage: (productPackage) => {
    subscriptionStore.state.selectedPackage = productPackage;
  },
  setSummary: (summary) => {
    subscriptionStore.state.summary = summary;
  },
  setStepIndex: (index) => {
    subscriptionStore.state.stepIndex = index;
  },
  resetSubscriptionState: () => {
    subscriptionStore.state = {
      ...initialState,
    };
  },
});

export const useSubscriptionStore = () => useSnapshot(subscriptionStore);

devtools(subscriptionStore, { name: 'subscriptionStore', enabled: true });
