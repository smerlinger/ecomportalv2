'use client';
import { postAJobFormSchema } from '@/lib/schemas/schemas';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditableInput } from '@/components/molecules/EditableTextInput';
import { Select } from '@/components/molecules/Select';
import TextArea from '@/components/molecules/TextArea';
import styles from './page.module.css';
import { Banner } from '@/components/atoms/Banner';
import { Header } from '@/components/organisms/Header';
import FileUpload from '@/components/FileUpload';
import { PostAJobForm } from '@/lib/types/types';
import { jobCategories } from '@/lib/constants/JobCategoriesList';
import { jobTypes } from '@/lib/constants/JobTypesList';
import CheckboxGroup from '@/components/Checkbox';
import { addOnOptions } from '@/lib/constants/AddOnOptionsList';

export default function Page() {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    reset,
    setError,
  } = useForm<PostAJobForm>({
    resolver: zodResolver(postAJobFormSchema),
  });
  const onSubmit = async (data: PostAJobForm) => {
    console.log(data);
    // send data to backend
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      alert('Submitting form failed!');
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.companyInfo?.email) {
        setError('companyInfo.email', {
          type: 'server',
          message: errors.companyInfo.email,
        });
      }
      if (errors.companyInfo?.name) {
        setError('companyInfo.name', {
          type: 'server',
          message: errors.companyInfo.name,
        });
      }
      if (errors.companyInfo?.url) {
        setError('companyInfo.url', {
          type: 'server',
          message: errors.companyInfo.url,
        });
      }
      if (errors.companyInfo?.logo) {
        setError('companyInfo.logo', {
          type: 'server',
          message: errors.companyInfo.logo,
        });
      }
      if (errors.jobInfo?.title) {
        setError('jobInfo.title', {
          type: 'server',
          message: errors.jobInfo.title,
        });
      }
      if (errors.jobInfo?.category) {
        setError('jobInfo.category', {
          type: 'server',
          message: errors.jobInfo.category,
        });
      }
      if (errors.jobInfo?.location?.city) {
        setError('jobInfo.location.city', {
          type: 'server',
          message: errors.jobInfo.location.city,
        });
      }
      if (errors.jobInfo?.location?.state) {
        setError('jobInfo.location.state', {
          type: 'server',
          message: errors.jobInfo.location.state,
        });
      }
      if (errors.jobInfo?.location?.country) {
        setError('jobInfo.location.country', {
          type: 'server',
          message: errors.jobInfo.location.country,
        });
      }
      if (errors.jobInfo?.employeeCount) {
        setError('jobInfo.employeeCount', {
          type: 'server',
          message: errors.jobInfo.employeeCount,
        });
      }
      if (errors.jobInfo?.jobType) {
        setError('jobInfo.jobType', {
          type: 'server',
          message: errors.jobInfo.jobType,
        });
      }
      if (errors.jobInfo?.applicationUrl) {
        setError('jobInfo.applicationUrl', {
          type: 'server',
          message: errors.jobInfo.applicationUrl,
        });
      }
      if (errors.jobInfo?.salary?.min) {
        setError('jobInfo.salary.min', {
          type: 'server',
          message: errors.jobInfo.salary.min,
        });
      }
      if (errors.jobInfo?.salary?.max) {
        setError('jobInfo.salary.max', {
          type: 'server',
          message: errors.jobInfo.salary.max,
        });
      }
      if (errors.jobInfo?.description) {
        setError('jobInfo.description', {
          type: 'server',
          message: errors.jobInfo.description,
        });
      }
      if (errors.jobInfo?.requirements) {
        setError('jobInfo.requirements', {
          type: 'server',
          message: errors.jobInfo.requirements,
        });
      }
      if (errors.addOns) {
        setError('addOns', { type: 'server', message: errors.addOns });
      }

      reset();
    }

    console.log(responseData);

    window.location.assign(responseData.url as string);
  };

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
          <Controller
            name="addOns"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <CheckboxGroup
                {...field}
                value={field.value}
                options={addOnOptions}
                onChange={field.onChange}
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
