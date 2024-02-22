// React
import { useState, useEffect, useCallback, forwardRef } from 'react';

// React router
import { useParams, useSearchParams, Link } from 'react-router-dom';

// Components
import { Label } from '../ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const RolesSelect = ({ name, form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Perfil</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Administrador</SelectItem>
                <SelectItem value="1">Analista Financeiro</SelectItem>
                <SelectItem value="2">Gerente</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const EducationsSelect = ({ form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="education"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Escolaridade</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Nunca estudou</SelectItem>
                <SelectItem value="1">Alfabetização / 1º ano</SelectItem>
                <SelectItem value="2">Ensino fundamental incompleto</SelectItem>
                <SelectItem value="3">Ensino fundamental completo</SelectItem>
                <SelectItem value="4">Ensino médio incompleto</SelectItem>
                <SelectItem value="5">Ensino médio completo</SelectItem>
                <SelectItem value="6">Ensino superior incompleto</SelectItem>
                <SelectItem value="7">Ensino superior completo</SelectItem>

              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const UfSelect = forwardRef(({ form, name, disabled }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Estado</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="AC">Acre</SelectItem>
                <SelectItem value="AL">Alagoas</SelectItem>
                <SelectItem value="AP">Amapá</SelectItem>
                <SelectItem value="AM">Amazonas</SelectItem>
                <SelectItem value="BA">Bahia</SelectItem>
                <SelectItem value="CE">Ceará</SelectItem>
                <SelectItem value="DF">Distrito Federal</SelectItem>
                <SelectItem value="ES">Espírito Santo</SelectItem>
                <SelectItem value="GO">Goiás</SelectItem>
                <SelectItem value="MA">Maranhão</SelectItem>
                <SelectItem value="MT">Mato Grosso</SelectItem>
                <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                <SelectItem value="MG">Minas Gerais</SelectItem>
                <SelectItem value="PA">Pará</SelectItem>
                <SelectItem value="PB">Paraíba</SelectItem>
                <SelectItem value="PR">Paraná</SelectItem>
                <SelectItem value="PE">Pernambuco</SelectItem>
                <SelectItem value="PI">Piauí</SelectItem>
                <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                <SelectItem value="RO">Rondônia</SelectItem>
                <SelectItem value="RR">Roraima</SelectItem>
                <SelectItem value="SC">Santa Catarina</SelectItem>
                <SelectItem value="SP">São Paulo</SelectItem>
                <SelectItem value="SE">Sergipe</SelectItem>
                <SelectItem value="TO">Tocantins</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
})

const SexualOrientationSelect = ({ form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="sexualOrientation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Orientação sexual</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Heterossexual</SelectItem>
                <SelectItem value="1">Bissexual</SelectItem>
                <SelectItem value="2">Homossexual</SelectItem>
                <SelectItem value="3">Pansexual</SelectItem>
                <SelectItem value="4">Outro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const RaceSelect = ({ form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="race"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cor/Raça</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Branco</SelectItem>
                <SelectItem value="1">Negro</SelectItem>
                <SelectItem value="2">Amarelo</SelectItem>
                <SelectItem value="3">Indígena</SelectItem>
                <SelectItem value="4">Pardo</SelectItem>
                <SelectItem value="5">Outro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const GenderSelect = ({ form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Identidade de genero</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Homem Cis</SelectItem>
                <SelectItem value="1">Mulher Cis</SelectItem>
                <SelectItem value="2">Não binário</SelectItem>
                <SelectItem value="3">Transsexual</SelectItem>
                <SelectItem value="4">Outro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const SexSelect = ({ form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="sex"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sexo</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Masculino</SelectItem>
                <SelectItem value="1">Feminino</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const MaritalStatusSelect = ({ form, setIsMarried, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="maritalStatus"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Estado civil</FormLabel>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                if (value === "1") {
                  setIsMarried(true);
                } else {
                  setIsMarried(false);
                }
              }}
              value={field.value}
              disabled={disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Solteiro</SelectItem>
                <SelectItem value="1">Casado / União estável</SelectItem>
                <SelectItem value="2">Divorciado</SelectItem>
                <SelectItem value="3">Viúvo</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const ForwardedSelect = ({ form, setIsOuther, disabled }) => {

  const handleOuther = (value) => {
    if (value === "4") {
      setIsOuther(true);
    } else {
      setIsOuther(false);
    }
  }

  return (
    <>
      <FormField
        control={form.control}
        name="forwarded"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Encaminhado por</FormLabel>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                handleOuther(value);
              }}
              value={field.value}
              disabled={disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Hóspede</SelectItem>
                <SelectItem value="1">Profissional de saúde</SelectItem>
                <SelectItem value="2">Mídia</SelectItem>
                <SelectItem value="3">Convênio</SelectItem>
                <SelectItem value="4">Outro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const OperationSelect = ({ form, setOperation, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="operation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo</FormLabel>
            <Select onValueChange={(value) => {
              field.onChange(value);
              setOperation(value);
            }}
              value={field.value}
              disabled={disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Entrada</SelectItem>
                <SelectItem value="1">Saida</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const MedicineIdSelect = ({ form, operation, allMedicineData, someMedicineData, medicinesData, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="medicineId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Medicamento</FormLabel>
            <Select disabled={(operation !== undefined && (operation ? (false) : (true))) || disabled} onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Array.isArray(allMedicineData) && operation === "0" &&
                  allMedicineData.map((item) => (
                    <SelectItem key={item?.id ? (item?.id) : (item?.medicineId)} value={item?.id ? (item?.id) : (item?.medicineId)}>{item?.name}</SelectItem>
                  ))}
                {Array.isArray(someMedicineData) && operation === "1" &&
                  someMedicineData.map((item) => (
                    <SelectItem key={item?.medicineId} value={item?.medicineId}>{item?.name}</SelectItem>
                  ))}
                {Array.isArray(medicinesData) &&
                  medicinesData.map((item) => (
                    <SelectItem key={item?.id} value={item?.id}>{item?.name}</SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const OccasionSelect = ({ form, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name="outputType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ocasião</FormLabel>
            <Select disabled={disabled} onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Descarte</SelectItem>
                <SelectItem value="1">Hóspede</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const AcquisitionSelect = ({ form, disabled, name }) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Aquisição</FormLabel>
            <Select disabled={disabled} onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Compra pessoal</SelectItem>
                <SelectItem value="1">Fluxo da RAID</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const BondSelect = ({ form, disabled, name }) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vinculo</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Convênio</SelectItem>
                <SelectItem value="1">Cota social</SelectItem>
                <SelectItem value="2">Particular</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const ModalitySelect = ({ form, disabled, name }) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Modalidade</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Ambulatório</SelectItem>
                <SelectItem value="1">Hóspede dia</SelectItem>
                <SelectItem value="2">Integral</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const MedicationSelect = ({ form, disabled, name }) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Faz uso de medicação</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Clínicas</SelectItem>
                <SelectItem value="1">Psicotrópicas</SelectItem>
                <SelectItem value="2">Ambos</SelectItem>
                <SelectItem value="3">Não faz uso</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

const DischargeTypeSelect = ({ form, name, disabled }) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de alta</FormLabel>
            <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">Terapêutica</SelectItem>
                <SelectItem value="1">Abandono</SelectItem>
                <SelectItem value="2">Administrativa</SelectItem>
                <SelectItem value="3">Outro</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export {
  RolesSelect,
  EducationsSelect,
  UfSelect,
  SexualOrientationSelect,
  RaceSelect,
  GenderSelect,
  SexSelect,
  MaritalStatusSelect,
  ForwardedSelect,
  OperationSelect,
  MedicineIdSelect,
  OccasionSelect,
  AcquisitionSelect,
  BondSelect,
  ModalitySelect,
  MedicationSelect,
  DischargeTypeSelect,
}
