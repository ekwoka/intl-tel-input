declare module "data" {
    global {
        type Country = {
            name: string;
            iso2: string;
            dialCode: string;
            priority: number;
            areaCodes: string[] | null;
            nodeById: object;
        };
    }
    const allCountries: Country[];
    export default allCountries;
}
declare module "intlTelInput" {
    type Globals = {
        autoCountry?: string;
        defaults: AllOptions;
        documentReady: () => boolean;
        getCountryData: () => Country[];
        getInstance: (input: HTMLInputElement) => Iti | null;
        instances: {
            [key: string]: Iti;
        };
        loadUtils: (path: string) => Promise<unknown> | null;
        startedLoadingAutoCountry?: boolean;
        startedLoadingUtilsScript?: boolean;
        version: string | undefined;
    };
    type Utils = {
        formatNumber(number: string, iso2: string | undefined, format?: number): string;
        formatNumberAsYouType(number: string, iso2: string | undefined): string;
        getCoreNumber(number: string, iso2: string | undefined): string;
        getExampleNumber(iso2: string | undefined, nationalMode: boolean, numberType: number, useE164?: boolean): string;
        getExtension(number: string, iso2: string | undefined): string;
        getNumberType: (number: string, iso2: string | undefined) => number;
        getValidationError(number: string, iso2: string | undefined): number;
        isPossibleNumber(number: string, iso2: string | undefined, mobileOnly?: boolean): boolean;
        isValidNumber: (number: string, iso2: string | undefined) => boolean;
        numberFormat: {
            NATIONAL: number;
            INTERNATIONAL: number;
            E164: number;
            RFC3966: number;
        };
        numberType: object;
    };
    global {
        interface Window {
            intlTelInputGlobals: Globals;
            intlTelInputUtils: Utils;
        }
    }
    type NumberType = "FIXED_LINE_OR_MOBILE" | "FIXED_LINE" | "MOBILE" | "PAGER" | "PERSONAL_NUMBER" | "PREMIUM_RATE" | "SHARED_COST" | "TOLL_FREE" | "UAN" | "UNKNOWN" | "VOICEMAIL" | "VOIP";
    type SelectedCountryData = Country | {
        name?: string;
        iso2?: string;
        dialCode?: string;
    };
    interface AllOptions {
        allowDropdown: boolean;
        autoPlaceholder: string;
        containerClass: string;
        countrySearch: boolean;
        customPlaceholder: ((selectedCountryPlaceholder: string, selectedCountryData: object) => string) | null;
        dropdownContainer: HTMLElement | null;
        excludeCountries: string[];
        fixDropdownWidth: boolean;
        formatAsYouType: boolean;
        formatOnDisplay: boolean;
        geoIpLookup: ((success: (iso2: string) => void, failure: () => void) => void) | null;
        hiddenInput: ((telInputName: string) => {
            phone: string;
            country?: string;
        }) | null;
        i18n: {
            af?: string;
            al?: string;
            dz?: string;
            as?: string;
            ad?: string;
            ao?: string;
            ai?: string;
            ag?: string;
            ar?: string;
            am?: string;
            aw?: string;
            ac?: string;
            au?: string;
            at?: string;
            az?: string;
            bs?: string;
            bh?: string;
            bd?: string;
            bb?: string;
            by?: string;
            be?: string;
            bz?: string;
            bj?: string;
            bm?: string;
            bt?: string;
            bo?: string;
            ba?: string;
            bw?: string;
            br?: string;
            io?: string;
            vg?: string;
            bn?: string;
            bg?: string;
            bf?: string;
            bi?: string;
            kh?: string;
            cm?: string;
            ca?: string;
            cv?: string;
            bq?: string;
            ky?: string;
            cf?: string;
            td?: string;
            cl?: string;
            cn?: string;
            cx?: string;
            cc?: string;
            co?: string;
            km?: string;
            cg?: string;
            cd?: string;
            ck?: string;
            cr?: string;
            hr?: string;
            cu?: string;
            cw?: string;
            cy?: string;
            cz?: string;
            ci?: string;
            dk?: string;
            dj?: string;
            dm?: string;
            do?: string;
            ec?: string;
            eg?: string;
            sv?: string;
            gq?: string;
            er?: string;
            ee?: string;
            sz?: string;
            et?: string;
            fk?: string;
            fo?: string;
            fj?: string;
            fi?: string;
            fr?: string;
            gf?: string;
            pf?: string;
            ga?: string;
            gm?: string;
            ge?: string;
            de?: string;
            gh?: string;
            gi?: string;
            gr?: string;
            gl?: string;
            gd?: string;
            gp?: string;
            gu?: string;
            gt?: string;
            gg?: string;
            gn?: string;
            gw?: string;
            gy?: string;
            ht?: string;
            hn?: string;
            hk?: string;
            hu?: string;
            is?: string;
            in?: string;
            id?: string;
            ir?: string;
            iq?: string;
            ie?: string;
            im?: string;
            il?: string;
            it?: string;
            jm?: string;
            jp?: string;
            je?: string;
            jo?: string;
            kz?: string;
            ke?: string;
            ki?: string;
            xk?: string;
            kw?: string;
            kg?: string;
            la?: string;
            lv?: string;
            lb?: string;
            ls?: string;
            lr?: string;
            ly?: string;
            li?: string;
            lt?: string;
            lu?: string;
            mo?: string;
            mg?: string;
            mw?: string;
            my?: string;
            mv?: string;
            ml?: string;
            mt?: string;
            mh?: string;
            mq?: string;
            mr?: string;
            mu?: string;
            yt?: string;
            mx?: string;
            fm?: string;
            md?: string;
            mc?: string;
            mn?: string;
            me?: string;
            ms?: string;
            ma?: string;
            mz?: string;
            mm?: string;
            na?: string;
            nr?: string;
            np?: string;
            nl?: string;
            nc?: string;
            nz?: string;
            ni?: string;
            ne?: string;
            ng?: string;
            nu?: string;
            nf?: string;
            kp?: string;
            mk?: string;
            mp?: string;
            no?: string;
            om?: string;
            pk?: string;
            pw?: string;
            ps?: string;
            pa?: string;
            pg?: string;
            py?: string;
            pe?: string;
            ph?: string;
            pl?: string;
            pt?: string;
            pr?: string;
            qa?: string;
            ro?: string;
            ru?: string;
            rw?: string;
            re?: string;
            ws?: string;
            sm?: string;
            sa?: string;
            sn?: string;
            rs?: string;
            sc?: string;
            sl?: string;
            sg?: string;
            sx?: string;
            sk?: string;
            si?: string;
            sb?: string;
            so?: string;
            za?: string;
            kr?: string;
            ss?: string;
            es?: string;
            lk?: string;
            bl?: string;
            sh?: string;
            kn?: string;
            lc?: string;
            mf?: string;
            pm?: string;
            vc?: string;
            sd?: string;
            sr?: string;
            sj?: string;
            se?: string;
            ch?: string;
            sy?: string;
            st?: string;
            tw?: string;
            tj?: string;
            tz?: string;
            th?: string;
            tl?: string;
            tg?: string;
            tk?: string;
            to?: string;
            tt?: string;
            tn?: string;
            tr?: string;
            tm?: string;
            tc?: string;
            tv?: string;
            vi?: string;
            ug?: string;
            ua?: string;
            ae?: string;
            gb?: string;
            us?: string;
            uy?: string;
            uz?: string;
            vu?: string;
            va?: string;
            ve?: string;
            vn?: string;
            wf?: string;
            eh?: string;
            ye?: string;
            zm?: string;
            zw?: string;
            ax?: string;
            selectedCountryAriaLabel?: string;
            searchPlaceholder?: string;
            countryListAriaLabel?: string;
            oneSearchResult?: string;
            multipleSearchResults?: string;
            noCountrySelected?: string;
            zeroSearchResults?: string;
        };
        initialCountry: string;
        nationalMode: boolean;
        onlyCountries: string[];
        placeholderNumberType: NumberType;
        preferredCountries: string[];
        showFlags: boolean;
        showSelectedDialCode: boolean;
        strictMode: boolean;
        useFullscreenPopup: boolean;
        utilsScript: string;
    }
    global {
        type SomeOptions = Partial<AllOptions>;
    }
    export class Iti {
        id: number;
        promise: Promise<[unknown, unknown]>;
        private telInput;
        private activeItem;
        private highlightedItem;
        private options;
        private hadInitialPlaceholder;
        private isRTL;
        private selectedCountryData;
        private countries;
        private dialCodeMaxLen;
        private dialCodeToIso2Map;
        private dialCodes;
        private preferredCountries;
        private countryContainer;
        private selectedCountry;
        private selectedCountryInner;
        private selectedCountryA11yText;
        private selectedDialCode;
        private dropdownArrow;
        private dropdownContent;
        private searchInput;
        private searchResultsA11yText;
        private countryList;
        private dropdown;
        private hiddenInput;
        private hiddenInputCountry;
        private maxCoreNumberLength;
        private defaultCountry;
        private _handleHiddenInputSubmit;
        private _handleLabelClick;
        private _handleClickSelectedCountry;
        private _handleCountryContainerKeydown;
        private _handleInputEvent;
        private _handleKeydownEvent;
        private _handleWindowScroll;
        private _handleMouseoverCountryList;
        private _handleClickCountryList;
        private _handleClickOffToClose;
        private _handleKeydownOnDropdown;
        private _handleSearchChange;
        private resolveAutoCountryPromise;
        private rejectAutoCountryPromise;
        private resolveUtilsScriptPromise;
        private rejectUtilsScriptPromise;
        constructor(input: HTMLInputElement, customOptions?: SomeOptions);
        _init(): void;
        private _processCountryData;
        private _addToDialCodeMap;
        private _processAllCountries;
        private _translateCountryNames;
        private _processDialCodes;
        private _processPreferredCountries;
        private _generateMarkup;
        private _appendListItems;
        private _setInitialState;
        private _initListeners;
        private _initHiddenInputListener;
        private _initDropdownListeners;
        private _initRequests;
        private _loadAutoCountry;
        private _initTelInputListeners;
        private _cap;
        private _trigger;
        private _openDropdown;
        private _setDropdownPosition;
        private _bindDropdownListeners;
        private _filterCountries;
        private _updateSearchResultsText;
        private _handleUpDownKey;
        private _handleEnterKey;
        private _searchForCountry;
        private _updateValFromNumber;
        private _updateCountryFromNumber;
        private _highlightListItem;
        private _getCountryData;
        private _setCountry;
        private _updateMaxLength;
        private _setSelectedCountryTitleAttribute;
        private _getHiddenSelectedCountryWidth;
        private _updatePlaceholder;
        private _selectListItem;
        private _closeDropdown;
        private _scrollTo;
        private _updateDialCode;
        private _getDialCode;
        private _getFullNumber;
        private _beforeSetNumber;
        private _triggerCountryChange;
        private _formatNumberAsYouType;
        handleAutoCountry(): void;
        handleUtils(): void;
        destroy(): void;
        getExtension(): string;
        getNumber(format?: number): string;
        getNumberType(): number;
        getSelectedCountryData(): SelectedCountryData;
        getValidationError(): number;
        isValidNumber(mobileOnly?: boolean): boolean | null;
        isValidNumberPrecise(): boolean | null;
        setCountry(iso2: string): void;
        setNumber(number: string): void;
        setPlaceholderNumberType(type: NumberType): void;
    }
    const intlTelInput: (input: HTMLInputElement, options?: SomeOptions) => Iti;
    export default intlTelInput;
}
