import { FormEvent, SetStateAction, useState } from "react";

type Props = {
    //setCategories: (value: SetStateAction<string[]> ) => void, 
    onNewCategory: (value: string ) => void
}

export const AddCategory = ({ onNewCategory }:Props) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories((x: string[]): string[] => {
        //     return [inputValue, ...x];
        // });
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    const onAddInput = (value: string) => {
        setInputValue(value);
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={(e) => onAddInput(e.target.value)}
            />
        </form>
    );
}
