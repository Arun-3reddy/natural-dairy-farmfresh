import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const SearchBar = ({ onSearch, placeholder = "Search for dairy products..." }) => {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery("");
    setIsExpanded(false);
    inputRef.current?.blur();
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!query) {
      setIsExpanded(false);
    }
  };

  return (
    <div className={`relative transition-all duration-300 ${isExpanded ? 'flex-1 max-w-2xl' : 'flex-1 max-w-md'} mx-8`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="pl-10 pr-10 bg-secondary/50 border-primary/20 focus:border-primary/40 transition-all duration-300"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 animate-scale-in"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border/40 rounded-lg shadow-elegant z-50 animate-fade-in">
          <div className="p-3">
            <p className="text-sm text-muted-foreground">
              Searching for "{query}"...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;