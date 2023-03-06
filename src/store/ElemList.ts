import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

export type DataT = {
    id: number,
    userId: number,
    title: string
};
class ElemList {
    list: DataT[] = [];

    constructor() {
        makeAutoObservable(this);
        makePersistable(this, { name: 'ElemListStore', properties: ['list']/*, storage: window.localStorage*/ });
    }
    setItem(list: DataT[]): void {
        this.list = list;
    };
    getItem(): DataT[] {
        return this.list;
    };
    removeItem(): void {
        this.list = [];
    };
}

const ElemListObj = new ElemList();

export { ElemListObj };
