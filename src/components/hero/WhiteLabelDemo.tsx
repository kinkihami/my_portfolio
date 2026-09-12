"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bus,
  Calendar,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  AlertTriangle,
  Building,
  Layers,
  Sparkles,
  Navigation,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TenantId = "greenfield" | "alnoor" | "stannes";
type RoleId = "parent" | "teacher" | "driver" | "principal";

interface TenantConfig {
  id: TenantId;
  name: string;
  code: string;
  badge: string;
  primaryColor: string;
  accentColor: string;
  bgTint: string;
  borderTint: string;
  motto: string;
}

const TENANTS: Record<TenantId, TenantConfig> = {
  greenfield: {
    id: "greenfield",
    name: "Greenfield Public",
    code: "TENANT_GF_01",
    badge: "GP",
    primaryColor: "#10B981", // Emerald
    accentColor: "#34D399",
    bgTint: "rgba(16, 185, 129, 0.08)",
    borderTint: "rgba(16, 185, 129, 0.3)",
    motto: "Excellence in Learning",
  },
  alnoor: {
    id: "alnoor",
    name: "Al Noor International",
    code: "TENANT_AN_02",
    badge: "ANI",
    primaryColor: "#0EA5E9", // Sky Blue
    accentColor: "#38BDF8",
    bgTint: "rgba(14, 165, 233, 0.08)",
    borderTint: "rgba(14, 165, 233, 0.3)",
    motto: "Knowledge & Integrity",
  },
  stannes: {
    id: "stannes",
    name: "St. Anne's Academy",
    code: "TENANT_STA_03",
    badge: "STA",
    primaryColor: "#E8A33D", // Amber
    accentColor: "#F59E0B",
    bgTint: "rgba(232, 163, 61, 0.08)",
    borderTint: "rgba(232, 163, 61, 0.3)",
    motto: "Leadership & Service",
  },
};

const ROLES: { id: RoleId; label: string; icon: React.ElementType }[] = [
  { id: "parent", label: "Parent", icon: Bus },
  { id: "teacher", label: "Teacher", icon: Calendar },
  { id: "driver", label: "Driver", icon: Truck },
  { id: "principal", label: "Principal", icon: ShieldCheck },
];

export function WhiteLabelDemo() {
  const [activeTenant, setActiveTenant] = useState<TenantId>("greenfield");
  const [activeRole, setActiveRole] = useState<RoleId>("parent");
  const prefersReduced = useReducedMotion();

  const tenant = TENANTS[activeTenant];

  return (
    <div className="w-full max-w-md mx-auto lg:max-w-none flex flex-col items-center">
      {/* Top Simulator Header */}
      <div className="w-full max-w-sm flex items-center justify-between font-mono text-[11px] text-[#8A949E] pb-2 px-1">
        <span className="flex items-center gap-1.5 text-[#E6E9EC]">
          <Layers className="h-3.5 w-3.5 text-[#E8A33D]" />
          <span>WHITE-LABEL SIMULATOR</span>
        </span>
        <span className="text-[10px] text-[#8A949E] px-1.5 py-0.5 rounded-[2px] bg-[#0F1318] border border-[#1C2229]">
          LIVE_ENGINE
        </span>
      </div>

      {/* Main Interactive Phone Frame */}
      <div
        className="w-full max-w-sm bg-[#07090C] rounded-xl border border-[#1C2229] p-3 shadow-2xl relative overflow-hidden transition-colors duration-300"
        style={{
          boxShadow: `0 20px 40px -15px ${tenant.bgTint}`,
        }}
      >
        {/* Mobile Device Status Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#8A949E] px-2 py-1 mb-2 border-b border-[#1C2229]">
          <span>09:41</span>
          <div className="h-2 w-12 bg-[#1C2229] rounded-full mx-auto" />
          <div className="flex items-center gap-1">
            <span>5G</span>
            <span className="h-2 w-3 rounded-[1px] border border-[#8A949E] bg-[#E8A33D]/60" />
          </div>
        </div>

        {/* Dynamic Tenant Header inside Phone */}
        <motion.div
          key={activeTenant}
          initial={{ opacity: prefersReduced ? 1 : 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="p-3 rounded-lg border mb-3 flex items-center justify-between transition-colors duration-200"
          style={{
            backgroundColor: tenant.bgTint,
            borderColor: tenant.borderTint,
          }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="h-8 w-8 rounded-md flex items-center justify-center font-mono font-bold text-xs text-white"
              style={{ backgroundColor: tenant.primaryColor }}
            >
              {tenant.badge}
            </div>
            <div>
              <p className="text-xs font-semibold text-[#E6E9EC] tracking-tight">
                {tenant.name}
              </p>
              <p className="text-[10px] font-mono text-[#8A949E]">
                {tenant.code} // {tenant.motto}
              </p>
            </div>
          </div>
          <span
            className="text-[9px] font-mono px-1.5 py-0.5 rounded-[2px] border text-white font-semibold uppercase"
            style={{
              backgroundColor: tenant.primaryColor,
              borderColor: tenant.accentColor,
            }}
          >
            {activeRole}
          </span>
        </motion.div>

        {/* Dynamic Role Viewport Screen */}
        <div className="min-h-[220px] bg-[#0F1318] rounded-lg border border-[#1C2229] p-3 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* PARENT VIEW */}
            {activeRole === "parent" && (
              <motion.div
                key="parent"
                initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#8A949E]">ROUTE TELEMETRY</span>
                  <span
                    className="font-semibold flex items-center gap-1"
                    style={{ color: tenant.primaryColor }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ backgroundColor: tenant.primaryColor }} />
                    LIVE GPS ACTIVE
                  </span>
                </div>

                {/* Simulated Vector Route Track */}
                <div className="h-20 bg-[#07090C] rounded-md border border-[#1C2229] p-2 relative flex items-center justify-between">
                  <div className="absolute inset-x-4 top-1/2 h-0.5 bg-[#1C2229] -translate-y-1/2" />
                  <div
                    className="absolute left-4 top-1/2 h-0.5 -translate-y-1/2"
                    style={{ width: "65%", backgroundColor: tenant.primaryColor }}
                  />

                  {/* Stop 1: Campus */}
                  <div className="z-10 flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-[#151B22] border border-[#1C2229] flex items-center justify-center text-[8px] text-[#8A949E]">
                      1
                    </div>
                    <span className="text-[8px] font-mono text-[#8A949E] mt-1">Campus</span>
                  </div>

                  {/* Bus Location Indicator */}
                  <div className="z-10 flex flex-col items-center" style={{ marginLeft: "45%" }}>
                    <div
                      className="h-6 w-6 rounded-full flex items-center justify-center shadow-lg border"
                      style={{
                        backgroundColor: tenant.primaryColor,
                        borderColor: "#FFFFFF",
                      }}
                    >
                      <Bus className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[8px] font-mono text-white mt-1 font-semibold">
                      Bus 12 (8 min)
                    </span>
                  </div>

                  {/* Stop 2: Home */}
                  <div className="z-10 flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-[#151B22] border border-[#1C2229] flex items-center justify-center text-[8px] text-[#8A949E]">
                      2
                    </div>
                    <span className="text-[8px] font-mono text-[#8A949E] mt-1">Home Drop</span>
                  </div>
                </div>

                {/* Driver & Info Card */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="bg-[#07090C] p-2 rounded border border-[#1C2229]">
                    <span className="text-[#8A949E] block text-[9px]">DRIVER</span>
                    <span className="text-[#E6E9EC] font-semibold">Rajesh K.</span>
                  </div>
                  <div className="bg-[#07090C] p-2 rounded border border-[#1C2229]">
                    <span className="text-[#8A949E] block text-[9px]">NEXT STOP</span>
                    <span className="text-[#E6E9EC] font-semibold">Hill Top (0.4 km)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TEACHER VIEW */}
            {activeRole === "teacher" && (
              <motion.div
                key="teacher"
                initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                transition={{ duration: 0.15 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#8A949E]">TODAY'S SCHEDULE</span>
                  <span className="text-[#E6E9EC]">PERIOD 03 / 07</span>
                </div>

                <div className="space-y-1.5">
                  <div
                    className="p-2 rounded border flex items-center justify-between text-xs"
                    style={{
                      backgroundColor: tenant.bgTint,
                      borderColor: tenant.borderTint,
                    }}
                  >
                    <div>
                      <p className="font-semibold text-[#E6E9EC] text-[11px]">
                        Grade 10-A • Physics Lab
                      </p>
                      <p className="text-[9px] font-mono text-[#8A949E]">
                        09:30 - 10:20 AM // Lab 2
                      </p>
                    </div>
                    <span
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold"
                      style={{ color: tenant.primaryColor }}
                    >
                      32/34 Present
                    </span>
                  </div>

                  <div className="p-2 bg-[#07090C] rounded border border-[#1C2229] flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-[#E6E9EC] text-[11px]">
                        Grade 9-B • Substitution
                      </p>
                      <p className="text-[9px] font-mono text-[#8A949E]">
                        10:30 - 11:15 AM // Room 104
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-[#E8A33D] px-1 bg-[#E8A33D]/10 rounded">
                      Assigned
                    </span>
                  </div>
                </div>

                <div className="bg-[#07090C] p-2 rounded border border-[#1C2229] text-[10px] font-mono flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[#8A949E]">
                    Morning attendance submitted (09:15 AM)
                  </span>
                </div>
              </motion.div>
            )}

            {/* DRIVER VIEW */}
            {activeRole === "driver" && (
              <motion.div
                key="driver"
                initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                transition={{ duration: 0.15 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#8A949E]">FLEET TRIP #07</span>
                  <span className="text-emerald-400 font-semibold">IN TRANSIT</span>
                </div>

                {/* Fraud-Resistant Odometer Photo Status */}
                <div className="bg-[#07090C] p-2.5 rounded border border-[#1C2229] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#8A949E]">ODOMETER AUDIT</span>
                    <span className="text-[#E6E9EC] font-semibold">42,180 KM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    <ShieldCheck className="h-3 w-3 shrink-0" />
                    <span>Start Photo Verified • Zero GPS spoof risk</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="bg-[#07090C] p-2 rounded border border-[#1C2229]">
                    <span className="text-[#8A949E] block text-[9px]">STUDENTS</span>
                    <span className="text-[#E6E9EC] font-semibold">18 Boarded / 22</span>
                  </div>
                  <div className="bg-[#07090C] p-2 rounded border border-[#1C2229]">
                    <span className="text-[#8A949E] block text-[9px]">NEXT STOP</span>
                    <span className="text-[#E6E9EC] font-semibold">South Gate #3</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PRINCIPAL VIEW */}
            {activeRole === "principal" && (
              <motion.div
                key="principal"
                initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                transition={{ duration: 0.15 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#8A949E]">CAMPUS TELEMETRY</span>
                  <span
                    className="font-semibold"
                    style={{ color: tenant.primaryColor }}
                  >
                    ALL SYSTEMS NOMINAL
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#07090C] p-2 rounded border border-[#1C2229]">
                    <span className="text-[9px] font-mono text-[#8A949E] block">
                      STUDENT ATTENDANCE
                    </span>
                    <span className="text-sm font-semibold font-mono text-[#E6E9EC]">
                      96.4%
                    </span>
                    <span className="text-[8px] font-mono text-[#8A949E] block">
                      1,368 / 1,420 Present
                    </span>
                  </div>
                  <div className="bg-[#07090C] p-2 rounded border border-[#1C2229]">
                    <span className="text-[9px] font-mono text-[#8A949E] block">
                      STAFF ON DUTY
                    </span>
                    <span className="text-sm font-semibold font-mono text-[#E6E9EC]">
                      88 / 92
                    </span>
                    <span className="text-[8px] font-mono text-emerald-400 block">
                      4 Substitutions Active
                    </span>
                  </div>
                </div>

                <div className="bg-[#07090C] p-2 rounded border border-[#1C2229] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#8A949E]">TERM FEE COLLECTION</span>
                  <span className="text-[#E8A33D] font-semibold">
                    ₹18.4L (91.2%)
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home indicator line */}
        <div className="h-1 w-20 bg-[#1C2229] rounded-full mx-auto mt-3" />
      </div>

      {/* Control Surface: Tenant and Role Switchers */}
      <div className="w-full max-w-sm mt-3 space-y-2">
        {/* Tenant Switcher */}
        <div className="bg-[#0F1318] p-1.5 rounded-[2px] border border-[#1C2229]">
          <span className="block text-[9px] font-mono text-[#8A949E] px-1 mb-1">
            SELECT TENANT (WHITE-LABEL RESKIN)
          </span>
          <div className="grid grid-cols-3 gap-1">
            {(Object.keys(TENANTS) as TenantId[]).map((tKey) => {
              const item = TENANTS[tKey];
              const isActive = activeTenant === tKey;
              return (
                <button
                  key={tKey}
                  onClick={() => setActiveTenant(tKey)}
                  className={`px-2 py-1.5 text-[10px] font-mono rounded-[2px] transition-colors cursor-pointer text-center truncate ${
                    isActive
                      ? "bg-[#151B22] text-white border border-[#E8A33D]/40 font-semibold"
                      : "text-[#8A949E] hover:text-[#E6E9EC] hover:bg-[#07090C]"
                  }`}
                  aria-pressed={isActive}
                >
                  {item.name.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Role Switcher */}
        <div className="bg-[#0F1318] p-1.5 rounded-[2px] border border-[#1C2229]">
          <span className="block text-[9px] font-mono text-[#8A949E] px-1 mb-1">
            SELECT ROLE (DYNAMIC DASHBOARD)
          </span>
          <div className="grid grid-cols-4 gap-1">
            {ROLES.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex flex-col items-center gap-0.5 py-1 px-1 rounded-[2px] text-[10px] font-mono transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#151B22] text-[#E8A33D] border border-[#E8A33D]/40 font-semibold"
                      : "text-[#8A949E] hover:text-[#E6E9EC] hover:bg-[#07090C]"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className="h-3 w-3" />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
