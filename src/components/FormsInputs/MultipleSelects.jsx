// React
import { useEffect, useState } from "react";
import { useForm, useFieldArray, set } from "react-hook-form";
import { useParams } from "react-router-dom";

// Components
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

// React-Select
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const SpasMultipleSelect = ({ form, name, selectedSubstances, disabled, setSelectedSubstances }) => {

    const options = [
        { value: '0', label: 'Álcool' },
        { value: '1', label: 'Tabaco' },
        { value: '2', label: 'Maconha' },
        { value: '3', label: 'Cocaína' },
        { value: '4', label: 'Crack' },
        { value: '5', label: 'Anfetamina / Sintéticas' },
        { value: '6', label: 'Ansiolíticos' },
        { value: '7', label: 'Opioides' },
        { value: '8', label: 'Não faz uso' },
    ];

    const animatedComponents = makeAnimated();

    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Substância psicoativa</FormLabel>
                        <Select
                            value={options.filter(option => selectedSubstances.includes(option.value))}
                            isMulti
                            options={options}
                            placeholder="Selecione..."
                            noOptionsMessage={() => "Nenhuma opção encontrada"}
                            components={animatedComponents}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(selectedOptions) => {
                                const selectedValues = selectedOptions.map(option => option.value);
                                form.setValue('spas', selectedValues);
                                setSelectedSubstances(selectedValues);
                            }}
                            isDisabled={disabled}
                        />

                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export {SpasMultipleSelect}