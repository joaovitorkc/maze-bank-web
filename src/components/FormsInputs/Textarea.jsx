// React
import { useState, useEffect, useCallback, forwardRef } from "react";
import { useForm, useWatch } from "react-hook-form";

// React router
import { useParams, useSearchParams, Link } from "react-router-dom";

// Components
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Mail, Watch } from "lucide-react";
import { getMedicineQuantityGuest } from "@/services/guest-flows";
import { Textarea } from "../ui/textarea";

const ObservationTextarea = ({ form, name, disabled }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Observação</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Observação" {...field} disabled={disabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

const CurrentHistoricalTextarea = ({ form, name, disabled }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Histórico atual</FormLabel>
                        <FormControl>
                            <Textarea placeholder="(Queixa atual / tempo / motivo / histórico de admissão)" {...field} disabled={disabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

const DescriptionTextarea = ({ form, name, disabled }) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Evolução do hóspede" {...field} disabled={disabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

export {
    ObservationTextarea,
    CurrentHistoricalTextarea,
    DescriptionTextarea,
}