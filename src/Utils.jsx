import {unleash} from './index'

export function findColorForCells(flag) {
    if(flag.enabled) {
        var variant = unleash.getVariant(flag.name)
        console.log('variant inside findColorForCells=>',variant)
        if(variant.name !== 'disabled') {
            if(variant.name === 'GreenVariant') {
                return 'lightgreen'
            } else {
                return 'lightblue'
            }
        } else {
          return 'white'
        }
    } else {
        return '#FFCCCB'
    }
}

export function findTextColorCSS(variant) {
    if(variant && variant.name !== 'disabled') {
        if(variant.name === 'GreenVariant') {
            return 'lloydTextColor'
        } else if(variant.name === 'BlueVariant'){
            return 'halifaxTextColor'
        } else {
            return 'normalTextColor'
        }
    } else {
        return 'normalTextColor'
    }
}

export function findBGColorCSS(variant) {
    if(variant && variant.name !== 'disabled') {
        if(variant.name === 'GreenVariant') {
            return 'lloydBGColor'
        } else if(variant.name === 'BlueVariant'){
            return 'halifaxBGColor'
        } else {
            return 'normalBGColor'
        }
    } else {
        return 'normalBGColor'
    }
}

export function findBorderOnPanel(variant) {
    if(variant && variant.name !== 'disabled') {
        if(variant.name === 'GreenVariant') {
            return 'lloydBorderOnPanel'
        } else if(variant.name === 'BlueVariant'){
            return 'halifaxBorderOnPanel'
        } else {
            return 'lloydBorderOnPanel'
        }
    } else {
        return 'lloydBorderOnPanel'
    }
}

export function findBrandBasedOnVariant(variant) {
    if(variant && variant.name !== 'disabled') {
        if(variant.name === 'GreenVariant') {
            return 'lloyds'
        } else if(variant.name === 'BlueVariant'){
            return 'halifax'
        } else {
            return 'lloyds'
        }
    } else {
        return 'lloyds'
    }
}

export function findColorCode(variant) {
    if(variant && variant.name !== 'disabled') {
        if(variant.name === 'GreenVariant') {
            return '#006A4D'
        } else if(variant.name === 'BlueVariant'){
            return '#0040BB'
        } else {
            return '#006A4D'
        }
    } else {
        return '#006A4D'
    }
}
