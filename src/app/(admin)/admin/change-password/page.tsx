'use client';

import React, { FormEvent } from 'react';

export default function ChangePasswordPage() {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Lógica para alterar a senha
    console.log('Alteração de senha solicitada');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Alteração de Senha</h1>
      <form onSubmit={handleSubmit} className="max-w-md bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Senha Atual</label>
          <input
            type="password"
            id="current-password"
            name="currentPassword"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">Nova Senha</label>
          <input
            type="password"
            id="new-password"
            name="newPassword"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirmar Nova Senha</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Alterar Senha
        </button>
      </form>
    </div>
  );
} 