'use client';
import { PostAJobFormSchema } from '@/schemas/schemas';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditableInput } from '@/components/molecules/EditableTextInput';
import { Select } from '@/components/molecules/Select';
import TextArea from '@/components/molecules/TextArea';
import styles from './page.module.css';
import { Banner } from '@/components/atoms/Banner';
import { Header } from '@/components/organisms/Header';
import FileUpload from '@/components/FileUpload';
import { PostAJobForm } from '@/types/types';
import { jobCategories } from '@/constants/JobCategoriesList';
import { jobTypes } from '@/constants/JobTypesList';

export default function Page() {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<PostAJobForm>({
    resolver: zodResolver(PostAJobFormSchema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <h1>Post a Job</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="companyInfo.email"
            control={control}
            render={({ field }) => (
              <EditableInput
                {...field}
                label={'Email'}
                value={getValues('companyInfo.email') ?? ''}
                onChange={field.onChange}
                error={errors.companyInfo?.email?.message}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="companyInfo.name"
            control={control}
            render={({ field }) => (
              <EditableInput
                {...field}
                label={'Company Name'}
                value={getValues('companyInfo.name') ?? ''}
                onChange={field.onChange}
                error={errors.companyInfo?.name?.message}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="companyInfo.url"
            control={control}
            render={({ field }) => (
              <EditableInput
                {...field}
                label={'Company Website URL'}
                value={getValues('companyInfo.url') ?? ''}
                onChange={field.onChange}
                error={errors.companyInfo?.url?.message}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="jobInfo.title"
            control={control}
            render={({ field }) => (
              <EditableInput
                {...field}
                label={'Job Title'}
                value={getValues('jobInfo.title') ?? ''}
                onChange={field.onChange}
                error={errors.jobInfo?.title?.message}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="jobInfo.category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label={'Job Category'}
                options={[
                  { value: '', label: 'Select a category', disabled: true },
                  ...jobCategories.map((category) => ({
                    value: category,
                    label: category,
                  })),
                ]}
                value={getValues('jobInfo.category') ?? ''}
                onChange={field.onChange}
                error={errors.jobInfo?.category?.message}
                ref={field.ref}
              />
            )}
          />
          <div className={styles.group}>
            <label className={styles.labelText}>Location</label>
            <div className={styles.subfields}>
              <Controller
                name="jobInfo.location.city"
                control={control}
                render={({ field }) => (
                  <EditableInput
                    {...field}
                    label={'City'}
                    value={getValues('jobInfo.location.city') ?? ''}
                    onChange={field.onChange}
                    error={errors.jobInfo?.location?.city?.message}
                    ref={field.ref}
                  />
                )}
              />
              <Controller
                name="jobInfo.location.state"
                control={control}
                render={({ field }) => (
                  <EditableInput
                    {...field}
                    label={'State'}
                    value={getValues('jobInfo.location.state') ?? ''}
                    onChange={field.onChange}
                    error={errors.jobInfo?.location?.state?.message}
                    ref={field.ref}
                  />
                )}
              />
              <Controller
                name="jobInfo.location.country"
                control={control}
                render={({ field }) => (
                  <EditableInput
                    {...field}
                    label={'Country'}
                    value={getValues('jobInfo.location.country') ?? ''}
                    onChange={field.onChange}
                    error={errors.jobInfo?.location?.country?.message}
                    ref={field.ref}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.subfields}>
            <Controller
              name="jobInfo.employeeCount"
              control={control}
              render={({ field }) => (
                <EditableInput
                  {...field}
                  label={'Number of Positions'}
                  type="number"
                  value={getValues('jobInfo.employeeCount') ?? 0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  error={errors.jobInfo?.employeeCount?.message}
                  ref={field.ref}
                />
              )}
            />
            <Controller
              name="jobInfo.jobType"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  label={'Job Type'}
                  options={[
                    { value: '', label: 'Select a job type', disabled: true },
                    ...jobTypes.map((type) => ({
                      value: type,
                      label: type,
                    })),
                  ]}
                  value={getValues('jobInfo.jobType') ?? ''}
                  onChange={field.onChange}
                  error={errors.jobInfo?.jobType?.message}
                  ref={field.ref}
                />
              )}
            />
          </div>
          <Controller
            name="jobInfo.applicationUrl"
            control={control}
            render={({ field }) => (
              <EditableInput
                {...field}
                label={'Application URL or Public Email'}
                value={getValues('jobInfo.applicationUrl') ?? ''}
                onChange={field.onChange}
                error={errors.jobInfo?.applicationUrl?.message}
                ref={field.ref}
              />
            )}
          />
          <div className={styles.group}>
            <label className={styles.labelText}>Salary Range</label>
            <div className={styles.subfields}>
              <Controller
                name="jobInfo.salary.min"
                control={control}
                render={({ field }) => (
                  <EditableInput
                    {...field}
                    label={'Min'}
                    type="number"
                    value={getValues('jobInfo.salary.min') ?? 0}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    error={errors.jobInfo?.salary?.min?.message}
                    ref={field.ref}
                  />
                )}
              />
              <Controller
                name="jobInfo.salary.max"
                control={control}
                render={({ field }) => (
                  <EditableInput
                    {...field}
                    label={'Max'}
                    type="number"
                    value={getValues('jobInfo.salary.max') ?? 0}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    error={errors.jobInfo?.salary?.max?.message}
                    ref={field.ref}
                  />
                )}
              />
            </div>
          </div>
          <Controller
            name="companyInfo.logo"
            control={control}
            render={({ field }) => (
              <FileUpload
                {...field}
                name={'companyInfo.logo'}
                label={'Upload a logo'}
                onChange={field.onChange}
                error={errors.companyInfo?.logo?.message}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="jobInfo.description"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                label={'Job Description'}
                value={getValues('jobInfo.description') ?? ''}
                onChange={field.onChange}
                error={errors.jobInfo?.description?.message}
                ref={field.ref}
              />
            )}
          />
          <Controller
            name="jobInfo.requirements"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                label={'Job Requirements'}
                value={getValues('jobInfo.requirements') ?? ''}
                onChange={field.onChange}
                error={errors.jobInfo?.requirements?.message}
                ref={field.ref}
              />
            )}
          />
          <input type="submit" value="Post Job" />
        </form>
      </div>
    </div>
  );
}
