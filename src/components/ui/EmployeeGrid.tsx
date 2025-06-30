'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Employee = {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
};
const employees: Employee[] = Array.from({ length: 80 }, (_, i) => ({
  name: `Employee ${i + 1}`,
  title: ['Designer', 'Developer', 'Manager', 'Analyst', 'Lead', 'Consultant', 'Engineer', 'Coordinator'][i % 8],
  department: ['Design', 'Development', 'Management', 'Operations', 'Marketing'][i % 5],
  imageUrl: '/images/natalia.jpg',
}));

const departments = Array.from(new Set(employees.map((e) => e.department)));

export default function TeamSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const t = useTranslations("seitwerkvideo.team");

  const filteredEmployees = selectedDepartment
    ? employees.filter((e) => e.department === selectedDepartment)
    : employees;

  return (
    <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2c2c2c] pt-16 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.2)_0%,transparent_70%)]" />

      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto relative z-10">
        <button
          onClick={() => setSelectedDepartment(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-poppins ${
            selectedDepartment === null
              ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 hover:text-white'
          }`}
        >
    {t('all')}
        </button>
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDepartment(dept)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-poppins ${
              selectedDepartment === dept
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 hover:text-white'
            }`}
          >
                {t(`departments.${dept.toLowerCase()}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto relative z-10">
        {filteredEmployees.map((e, i) => (
          <div
            key={i}
            className="relative bg-black rounded-sm h-64 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <Image
              src={e.imageUrl}
              alt={e.name}
              fill
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300" />
            <div className="absolute bottom-0 w-full h-1/4 bg-[#f3f1ec]/20 backdrop-blur-lg flex flex-col items-center justify-center text-center border-t border-[rgba(255,255,255,0.1)]">
              <h3 className="text-base font-bold text-white font-poppins">{e.name}</h3>
              <p className="text-xs font-medium text-gray-200 font-poppins">{e.title}</p>
            </div>
            <div
              className="absolute inset-0 rounded-sm border-2 border-transparent bg-gradient-to-r from-teal-500 to-teal-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}