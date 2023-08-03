import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

export type SearchContextType = {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
};

export const defaultSearchContext: SearchContextType = {
    searchQuery: "",
    setSearchQuery: () => {},
};

export const SearchContext =
    createContext<SearchContextType>(defaultSearchContext);

type Props = {
    children: React.ReactNode;
};

const SearchProvider: React.FC<Props> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);

    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }

    return context;
};

export default SearchProvider;
