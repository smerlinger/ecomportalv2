'use client';
import { PostAJobFormSchema } from '@/schemas/schemas';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import EditableTextInput from '@/components/molecules/EditableTextInput';

type PostAJobForm = z.infer<typeof PostAJobFormSchema>;
export default function Page() {
  const { handleSubmit, control, getValues, formState: { errors } } = useForm<PostAJobForm>({
    resolver: zodResolver(PostAJobFormSchema),
  });
  // const { register, handleSubmit, control, getValues } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="jobInfo.title"
          control={control}
          render={({ field }) => (
            <EditableTextInput
              {...field}
              label={'Job Title'}
              // value={field.value}
              value={getValues('jobInfo.title') ?? ''}
              onChange={field.onChange}
              // error={field.error?.message}
              ref={field.ref}
            />
          )}
        />
        <input type="submit" value="Post Job" />
      </form>
    </div>
  );
}
