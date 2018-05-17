// @flow
import type {Node} from 'react';

import type {AuthPopupStateType} from 'reducers/authPopup/authPopupType';
import type {BreadCrumbsStateType} from 'reducers/breadcrumbs/breadcrumbsType';
import type {StoreInfoStateType} from 'reducers/store/storeInfoType';
import type {AddCartItemUpsellType} from 'reducers/cart/addCartItemUpsellType';

export type AjaxActionType = {type: string, payload: {data: any, response: {data: any}}};
export type ActionType<Payload = undefined, Meta = undefined> = {
    type: string,
    payload: Payload,
    meta: Meta,
    error?: boolean,
};
export type DispatchType<T = ActionType<any, any>> = (action: T) => T | Promise<any>;
export type DispatchedActionType = () => Promise<any>;
export type EventHandlerType = (e: SyntheticInputEvent<{}>) => void;
export type ChildrenType = Array<string | React$Element<any>> | React$Element<any> | string;
export type VoidFunctionType = () => void;
export type ClickHandlerType<T> = (event: SyntheticMouseEvent<T>) => void;

export type ApplicationStoreType = {
    breadcrumbs: BreadCrumbsStateType,
    storeInfo: StoreInfoStateType,
    authPopup: AuthPopupStateType,
    addCartItemUpsell: AddCartItemUpsellType,
};

export type CurrencyType = {
    code: string,
    symbol: string,
};

export type CustomerType = {
    coupon_code: string,
    form_key: string,
    currency: CurrencyType,
    is_coupon_applied: boolean,
    is_logged_in: boolean,
    is_subscribed: boolean,
};

export type MessageType = {
    type: string,
    message: string,
};

export type MeasurementsType = {
    bridgeWidth: number,
    lensHeight: number,
    lensWidth: number,
    templeLength: number,
};

export type MirrorImageType = {
    assigned: string,
    frameWidth: string,
    originalFrameHeight: number,
    originalFrameWidth: number,
    photo_id: string,
    product_id: string,
    src: string,
    width: string,
};

export type MyPicksType = {
    count: string,
    currentProductId: string,
    currentProductPicks: boolean,
    dispatch: DispatchType,
    updateMyPicks: () => boolean,
    handleSureRemove: () => void,
    onShow: boolean,
    sureRemove: boolean,
};

export type SliderDecoratorPropsType = {
    cellSpacing: number,
    currentSlide: number,
    frameWidth: number,
    goToSlide: number => void,
    nextSlide: () => void,
    previousSlide: () => void,
    slideCount: number,
    slideWidth: number,
    slidesToScroll: number,
    slidesToShow: number,
    wrapAround: boolean,
};

export type SliderDecoratorType = {
    component: Node | ((props: SliderDecoratorPropsType) => Node),
    position:
        | 'TopLeft'
        | 'TopCenter'
        | 'TopRight'
        | 'CenterLeft'
        | 'CenterCenter'
        | 'CenterRight'
        | 'BottomLeft'
        | 'BottomCenter'
        | 'BottomRight',
    style?: {[propperty: string]: any},
};

export type AuthPopupType = {
    status: boolean,
};

export type UpsellNameType =
    | 'insurance_20_20'
    | 'insurance_20_20_2yr'
    | 'uv'
    | 'digitalBlock'
    | 'transition'
    | 'sunglasses'
    | 'hydrophobic';

export type OfferType = {
    alias: UpsellNameType,
    price: number,
    specialPrice: string,
    isAdded: boolean,
};

export type CoverageOfferType = {
    alias: UpsellNameType,
    price: number,
    copayPrice: number,
    isAdded: boolean,
};

export type UpsellOfferType = OfferType | CoverageOfferType;

export type PrescriptionGlassesType = {
    link?: string,
    pd?: string,
    pd_right?: string,
    pd_left?: string,
    sph_od?: string,
    sph_os?: string,
    cyl_od?: string,
    cyl_os?: string,
    axi_od?: string,
    axi_os?: string,
    add_od?: string,
    add_os?: string,
    comment?: string,
};

export type CmsBannerType = {
    bannerContent: string | null,
    popupContent: string | null,
};

export type CmsBannersStateType = {
    [placeholder: string]: CmsBannerType,
};

export type RouterInfoType = {
    action: string,
    controller: string,
    module: string,
    params: {[string]: string},
    uri: string,
};

export type CollapsesType = {
    PDP_frame: boolean,
    PDP_shipping: boolean,
    PDP_reviews: boolean,
};

export type DynamicYieldContextType = {
    type: string,
    data: any,
};

export type DynamicYieldStateType = {
    context: DynamicYieldContextType,
    url: string,
    countAsPageView: boolean,
};

type DyCartDataType = {
    productId: number,
    quantity: number,
    itemPrice: number,
};

export type DyCommonCartDataType = {
    currency: CurrencyType,
    cart: Array<DyCartDataType>,
};

export type DyAddToCartDataType = {
    value: number,
    productId: number,
    quantity: number,
    size: string,
    ...DyCommonCartDataType,
};

export type DyCustomCartDataType = {
    item_price: number,
    full_sku: string,
};

export type RequestStateType = 'initial' | 'pending' | 'fulfilled' | 'rejected';
