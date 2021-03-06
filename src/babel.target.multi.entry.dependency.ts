import { BabelTarget } from './babel.target';
import { BabelTargetEntryDependency } from './babel.target.entry.dependency';
import Dependency = require('webpack/lib/Dependency');

export class BabelTargetMultiEntryDependency extends Dependency implements BabelTargetEntryDependency {

    public loc: string;
    public name: string;

    public get type(): string {
        return "babel target multi entry";
    }

    constructor(public babelTarget: BabelTarget, public dependencies: Dependency[], public originalName: string) {
        super();
        this.name = babelTarget.getTargetedAssetName(originalName);
    }
}
