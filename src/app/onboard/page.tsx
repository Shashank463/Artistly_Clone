'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.number().required().positive(),
  location: yup.string().required(),
});

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['Hindi', 'English', 'Tamil', 'Punjabi'];

export default function OnboardForm() {
  const {
    register,
    handleSubmit,
    // control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = () => {
    console.log('Submitted Artist:');
    alert('Form submitted! Check console for data.');
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <p className="text-red-600 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <textarea
            {...register('bio')}
            placeholder="Bio"
            className="w-full border p-2 rounded"
          />
          <p className="text-red-600 text-sm">{errors.bio?.message}</p>
        </div>

        <div>
          <p className="mb-1 font-medium">Category</p>
          {categories.map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                value={cat}
                {...register('category')}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
          <p className="text-red-600 text-sm">{errors.category?.message}</p>
        </div>

        <div>
          <p className="mb-1 font-medium">Languages</p>
          {languages.map((lang) => (
            <label key={lang} className="block">
              <input
                type="checkbox"
                value={lang}
                {...register('languages')}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
          <p className="text-red-600 text-sm">{errors.languages?.message}</p>
        </div>

        <div>
          <input
            {...register('fee')}
            type="number"
            placeholder="Fee in INR"
            className="w-full border p-2 rounded"
          />
          <p className="text-red-600 text-sm">{errors.fee?.message}</p>
        </div>

        <div>
          <input
            {...register('location')}
            placeholder="Location"
            className="w-full border p-2 rounded"
          />
          <p className="text-red-600 text-sm">{errors.location?.message}</p>
        </div>

        <div>
          <input
            type="file"
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
