"use client";

import { Button } from "@/components/ui/button";
// import { zodValidator } from "@tanstack/zod-form-adapter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  shopName: z.string().min(2, "Shop name is required"),
  address: z.string().min(5, "Address is required"),
  phone: z.string().optional(),
});

export function ProviderForm(props: React.ComponentProps<typeof Card>) {
  const session = authClient.useSession();
  const user = session.data?.user;
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      shopName: "",
      address: "",
      phone: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating provider...");
      try {
        console.log( value);

        // TODO: API call here

        toast.success("Provider created successfully", { id: toastId });
        router.push("/");
      } catch {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create Provider</CardTitle>
        <CardDescription>
          Complete your shop information to continue
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="provider-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Name */}
            <form.Field name="name">
              {(field) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input value={field.state.value} disabled />
                </Field>
              )}
            </form.Field>

            {/* Email */}
            <form.Field name="email">
              {(field) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input value={field.state.value} disabled />
                </Field>
              )}
            </form.Field>

            {/* Shop Name */}
            <form.Field name="shopName">
              {(field) => (
                <Field>
                  <FieldLabel>Shop Name *</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* Address */}
            <form.Field name="address">
              {(field) => (
                <Field>
                  <FieldLabel>Address *</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldError errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* Phone */}
            <form.Field name="phone">
              {(field) => (
                <Field>
                  <FieldLabel>Phone (optional)</FieldLabel>
                  <Input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button form="provider-form" type="submit" className="w-full">
          Create Provider
        </Button>
      </CardFooter>
    </Card>
  );
}
