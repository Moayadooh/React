import { BUY_CAKE } from './cakeTypes';

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
