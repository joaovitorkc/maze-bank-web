// React
import { useState, useEffect, useCallback, forwardRef } from "react";
import { useForm, useWatch } from "react-hook-form";

// React router
import { useParams, useSearchParams, Link } from "react-router-dom";

// Componentss
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
import { Input } from "@/components/ui/input";
import { Mail, Watch } from "lucide-react";

const NameInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Digite o nome"  {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const GuestNumberInput = forwardRef(({ form, data, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem> 
            <FormControl>
              <Input
                className={
                  ((!data) ? 'w-10' : '') +
                  ((data?.guest_number + 1) < 99 ? 'w-10' : '') +
                  (((data?.guest_number + 1) >= 100 && (data?.guest_number + 1) <= 999) ? 'w-12' : '') +
                  ((data?.guest_number + 1) >= 1000 ? 'w-14' : '')
                }
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const SocialNameInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome social</FormLabel>
            <FormControl>
              <Input placeholder="Digite o nome social" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const CpfInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>CPF</FormLabel>
            <FormControl>
              <Input maxLength={11} placeholder="Digite o CPF"  {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const RgInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>RG</FormLabel>
            <FormControl>
              <Input placeholder="Digite o RG" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const BirthAtInput = ({ form, name, disabled }) => {
  const actualDate = new Date();
  const oneYearBack = new Date(actualDate);
  oneYearBack.setFullYear(actualDate.getFullYear() - 1);

  const maxDate = oneYearBack.toISOString().split("T")[0];

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Data Nasc.</FormLabel>
            <FormControl>
              <Input max={maxDate} type="date" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const PhoneInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input
                maxLength={11}
                placeholder="Digite o telefone"
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const EmailInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="emailInput"
            >
              Email
            </label>
            <FormControl className="relative">
              <div>
                <Input
                  id="emailInput"
                  className="py-3 px-4 ps-11 block"
                  placeholder="Digite o email"
                  {...field}
                  disabled={disabled}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <Mail className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const PcdInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>PCD</FormLabel>
            <FormControl>
              <Input placeholder="Se positivo, especifique" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const AllergiesInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Alergias</FormLabel>
            <FormControl>
              <Input
                maxLength={11}
                placeholder="Se positivo, especifique"
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const PartnerNameInput = ({ form, name, isMarried, disabled }) => {
  useEffect(() => {
    if (!isMarried) {
      form.setValue("partnerName", "");
    }
  }, [form, isMarried]);

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome do cônjuge</FormLabel>
            <FormControl>
              {isMarried ? (
                <Input placeholder="Digite o nome do cônjuge" {...field} disabled={disabled} />
              ) : (
                <Input className="bg-slate-300" {...field} disabled />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const ForwardedOutherInput = ({ form, name, isOuther, disabled }) => {
  useEffect(() => {
    if (isOuther === false) {
      form.setValue("forwardedOuther", "");
    }
  }, [form, isOuther]);

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Se outro, qual?</FormLabel>
            <FormControl>
              {isOuther ? (
                <Input placeholder="" {...field} disabled={disabled} />
              ) : (
                <Input className="bg-slate-300" {...field} disabled />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const ProfessionInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profissão</FormLabel>
            <FormControl>
              <Input placeholder="Digite a profissão" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const OccupationInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ocupação</FormLabel>
            <FormControl>
              <Input placeholder="Digite a ocupação" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const StreetInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rua</FormLabel>
            <FormControl>
              <Input placeholder="Digite a rua" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const StreetNumberInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Numero da rua</FormLabel>
            <FormControl>
              <Input placeholder="Digite o numero da rua" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const ComplementInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Complemento</FormLabel>
            <FormControl>
              <Input placeholder="Digite o complemento" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const CepInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cep</FormLabel>
            <FormControl>
              <Input maxLength={8} placeholder="Digite o cep" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const NeighborhoodInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bairro</FormLabel>
            <FormControl>
              <Input placeholder="Digite o bairro" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const CityInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cidade</FormLabel>
            <FormControl>
              <Input placeholder="Digite a cidade" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const MotherNameInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome da mãe</FormLabel>
            <FormControl>
              <Input placeholder="Digite o nome da mãe" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const FatherNameInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome do pai</FormLabel>
            <FormControl>
              <Input placeholder="Digite o nome do pai" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const KinshipInput = forwardRef(({ form, name, disabled }, ref) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Parentesco</FormLabel>
            <FormControl>
              <Input placeholder="Digite o parentesco" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const DependentsInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dependentes</FormLabel>
            <FormControl>
              <Input
                min={0}
                type="number"
                placeholder="Digite o número de dependentes"
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const PlanInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plano</FormLabel>
            <FormControl>
              <Input placeholder="Digite o plano" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const CardNumberInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Numero do cartão</FormLabel>
            <FormControl>
              <Input maxLength={16} placeholder="Digite o número do cartão" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const PassWordInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Senha</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Digite a senha" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const ConfirmPassWordInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirme a senha</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Confirma a senha"
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const SpasOutherInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Uso habitual de outra(s) SPA(S)</FormLabel>
            <FormControl>
              <Input placeholder="Outra(s) SPA(s)" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const UsageTimeInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tempo de uso</FormLabel>
            <FormControl>
              <Input placeholder="Digite o tempo de uso" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const AbuseTimeInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tempo de abuso</FormLabel>
            <FormControl>
              <Input placeholder="Digite o tempo de abuso" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const ClinicalHistoricalInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Histórico clínico</FormLabel>
            <FormControl>
              <Input placeholder="Digite o histórico clínico" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const HistoricPsychiatricInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Histórico psiquiátrico</FormLabel>
            <FormControl>
              <Input placeholder="Digite o histórico psiquiátrico" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const TherapistNameInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome terapêuta</FormLabel>
            <FormControl>
              <Input placeholder="Digite o nome do terapêuta" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const TherapistPhoneInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone terapêuta</FormLabel>
            <FormControl>
              <Input maxLength={11} placeholder="Digite o telefone do terapêuta" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const MedicalNameInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome médico</FormLabel>
            <FormControl>
              <Input placeholder="Digite o nome do médico" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const MedicalPhoneInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone médico</FormLabel>
            <FormControl>
              <Input maxLength={11} placeholder="Digite o telefone do médico" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const AdmissionDiagnosisInput = ({ form, name, disabled }) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Diagnóstico na admissão</FormLabel>
            <FormControl>
              <Input placeholder="Digite o diagnóstico" {...field} disabled={disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

const AvailableQuantityInput = forwardRef(({ form, name, disabled, guestId, medicineQuantity, isLoading }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Disponível</FormLabel>
            <FormControl>
              <Input
                className="bg-slate-300"
                readOnly
                {...field}
                value={isLoading ? 'Carregando...' : medicineQuantity || '0'}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const QuantityInput = forwardRef(({ form, name, disabled, operation }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantidade</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Digite a quantidade"
                {...field}
                disabled={(form.getValues("operation") !== undefined && (form.getValues("operation") ? (false) : (true))) || disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const MedicineNameInput = forwardRef(({ form, name, disabled }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Medicamento</FormLabel>
            <FormControl>
              <Input
                placeholder="Medicamento"
                {...field}
                disabled={true}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const DischargeTypeOutherInput = forwardRef(({ form, name, disabled }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Se outro qual</FormLabel>
            <FormControl>
              <Input
                {...field}
                disabled={disabled}
                className={disabled ? "bg-slate-300" : ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const DischargeDiagnosisInput = forwardRef(({ form, name, disabled }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Diagnóstico na alta</FormLabel>
            <FormControl>
              <Input
                placeholder="Diagnóstico na alta"
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

const TitleInput = forwardRef(({ form, name, disabled }, ref) => {

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Titulo</FormLabel>
            <FormControl>
              <Input
                placeholder="Titulo da evolução"
                {...field}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
});

export {
  NameInput,
  SocialNameInput,
  CpfInput,
  RgInput,
  BirthAtInput,
  PhoneInput,
  EmailInput,
  PcdInput,
  AllergiesInput,
  PartnerNameInput,
  ForwardedOutherInput,
  ProfessionInput,
  OccupationInput,
  StreetInput,
  StreetNumberInput,
  ComplementInput,
  CepInput,
  NeighborhoodInput,
  CityInput,
  MotherNameInput,
  FatherNameInput,
  GuestNumberInput,
  KinshipInput,
  DependentsInput,
  PlanInput,
  CardNumberInput,
  PassWordInput,
  ConfirmPassWordInput,
  SpasOutherInput,
  UsageTimeInput,
  AbuseTimeInput,
  ClinicalHistoricalInput,
  HistoricPsychiatricInput,
  TherapistNameInput,
  TherapistPhoneInput,
  MedicalNameInput,
  MedicalPhoneInput,
  AdmissionDiagnosisInput,
  AvailableQuantityInput,
  QuantityInput,
  MedicineNameInput,
  DischargeTypeOutherInput,
  DischargeDiagnosisInput,
  TitleInput,
};
