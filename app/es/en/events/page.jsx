"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiMapPin, FiClock, FiX } from "react-icons/fi";
import { format } from "date-fns";
import Image from "next/image";
import { assets } from "@/assets/assets";

const SAMPLE_PROGRAMS = [
	{
		id: "p1",
		title: "Annual Revival Conference",
		type: "Conference",
		start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
		end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 16),
		location: "Main Auditorium",
		summary: "A three-day revival with worship, ministry & prophetic sessions.",
		details:
			"Join our annual revival conference featuring guest speakers, extended worship nights, ministry activations, and breakout sessions for pastors, families and youth.",
		price: 0,
		capacity: 500,
	},
	{
		id: "p2",
		title: "Leadership Seminar: Shepherding Teams",
		type: "Seminar",
		start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 35),
		end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 35 + 1000 * 60 * 60 * 4),
		location: "Training Hall A",
		summary: "A focused, hands-on seminar for church leaders & volunteers.",
		details:
			"Practical leadership training for team building, ministry systems, and volunteer care.",
		price: 5000,
		capacity: 150,
	},
	{
		id: "p3",
		title: "Youth Ignite Weekend",
		type: "Special Program",
		start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60),
		end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 61),
		location: "Youth Centre",
		summary: "A weekend of worship, workshops and outreach for youth.",
		details:
			"Music, teachings, outreach, and team-building activities for teenagers and young adults.",
		price: 2000,
		capacity: 250,
	},
];

export default function ProgramsPage() {
	const [programs] = useState(SAMPLE_PROGRAMS);
	const [filter, setFilter] = useState("all");
	const [query, setQuery] = useState("");
	const [selectedProgram, setSelectedProgram] = useState(null);
	const [registerFor, setRegisterFor] = useState(null);
	const [reg, setReg] = useState({ name: "", email: "", tickets: 1, notes: "" });

	const filtered = useMemo(() => {
		return programs
			.filter((p) => (filter === "all" ? true : p.type === filter))
			.filter((p) => {
				if (!query.trim()) return true;
				const q = query.toLowerCase();
				return (
					p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)
				);
			})
			.sort((a, b) => a.start - b.start);
	}, [programs, filter, query]);

	function openRegister(program) {
		setRegisterFor(program);
		setReg({ name: "", email: "", tickets: 1, notes: "" });
	}

	function submitRegistration(e) {
		e.preventDefault();
		console.log("Registration", {
			programId: registerFor.id,
			...reg,
			createdAt: new Date().toISOString(),
		});
		alert(`Thanks! You registered for ${registerFor.title}.`);
		setRegisterFor(null);
	}

	return (
		<div className="bg-gray-50 text-slate-900">
			{/* HERO */}
			<section className="relative h-[280px] sm:h-[340px] md:h-[420px] overflow-hidden bg-black">
				<Image
					src={assets.UNAWARE}
					alt="Church hero"
					fill
					className="absolute inset-0 w-full h-full object-cover opacity-70"
				/>
				<div className="absolute inset-0 bg-black/50" />

				<div className="relative z-10 flex items-center h-full px-6 md:px-20">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
							PROGRAMS & EVENTS
						</h1>
						<p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl">
							Browse all ongoing and upcoming programs. Register for conferences,
							seminars, trainings and special ministry events.
						</p>
					</motion.div>
				</div>
			</section>

			{/* FILTERS */}
			<section className="max-w-6xl mx-auto px-6 md:px-10 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
						<input
							placeholder="SEARCH PROGRAMS..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium w-full sm:w-auto"
						/>
						<div className="flex gap-2 flex-wrap">
							{["all", "Conference", "Seminar", "Special Program"].map((t) => (
								<button
									key={t}
									onClick={() => setFilter(t)}
									className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
										filter === t
											? "bg-[#bf9b30] text-black"
											: "bg-white border border-gray-300 text-gray-700 hover:border-[#bf9b30]"
									}`}
								>
									{t === "all" ? "ALL" : t.toUpperCase()}
								</button>
							))}
						</div>
					</div>

					<div className="text-sm font-medium text-gray-600">
						UPCOMING: {filtered.length} EVENT(S)
					</div>
				</div>
			</section>

			{/* PROGRAM GRID */}
			<section className="max-w-6xl mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
				{filtered.map((p) => (
					<motion.article
						key={p.id}
						whileHover={{ y: -6 }}
						className="bg-white rounded-xl p-5 shadow border border-gray-200 hover:shadow-lg transition-all flex flex-col"
					>
						<div className="flex items-start justify-between">
							<div className="flex-1">
								<div className="text-xs font-medium text-gray-400 uppercase">
									{p.type}
								</div>
								<h3 className="text-lg font-semibold mt-1 text-gray-900">
									{p.title}
								</h3>
							</div>
							<div className="text-xs text-gray-500 text-right ml-4">
								<div className="font-medium">
									{format(p.start, "MMM dd, yyyy")}
								</div>
								<div className="mt-1">{p.location}</div>
							</div>
						</div>

						<p className="mt-4 text-sm text-gray-600 leading-relaxed flex-grow">
							{p.summary}
						</p>

						<div className="mt-6 flex items-center gap-2 text-xs text-gray-500 mb-4">
							<FiClock size={16} /> <span>{format(p.start, "p")}</span>
							<FiMapPin size={16} className="ml-3" /> <span>{p.location}</span>
						</div>

						<div className="flex items-center gap-2 w-full">
							<button
								onClick={() => setSelectedProgram(p)}
								className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
							>
								DETAILS
							</button>

							<button
								onClick={() => openRegister(p)}
								className="flex-1 px-4 py-2 rounded-md font-semibold text-white text-sm bg-[#bf9b30] hover:bg-[#a68829] transition"
							>
								REGISTER
							</button>
						</div>
					</motion.article>
				))}
			</section>

			{/* PROGRAM SLIDE-OVER */}
			<AnimatePresence>
				{selectedProgram && (
					<motion.aside
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "tween", duration: 0.28 }}
						className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white rounded-l-2xl shadow-2xl z-50 overflow-auto"
					>
						<div className="p-6 sticky top-0 bg-white border-b">
							<div className="flex items-start justify-between gap-4">
								<div>
									<div className="text-xs font-medium text-gray-400 uppercase">
										{selectedProgram.type}
									</div>
									<h3 className="text-xl font-bold mt-1">
										{selectedProgram.title}
									</h3>
									<div className="text-xs text-gray-500 mt-1 font-medium">
										{format(selectedProgram.start, "PPP p")} •{" "}
										{selectedProgram.location}
									</div>
								</div>

								<button
									onClick={() => setSelectedProgram(null)}
									className="p-2 hover:bg-gray-100 rounded transition flex-shrink-0"
								>
									<FiX size={20} />
								</button>
							</div>
						</div>

						<div className="p-6 space-y-4">
							<p className="text-gray-700 text-sm leading-relaxed">
								{selectedProgram.details}
							</p>

							<div className="border-t pt-4 space-y-4">
								<div>
									<div className="text-xs text-gray-500 uppercase font-medium">
										PRICE
									</div>
									<div className="font-bold text-lg text-[#bf9b30]">
										{selectedProgram.price === 0
											? "FREE"
											: `₦${selectedProgram.price}`}
									</div>
								</div>

								<button
									onClick={() => {
										setSelectedProgram(null);
										openRegister(selectedProgram);
									}}
									className="w-full px-4 py-3 rounded-md text-white font-semibold bg-[#bf9b30] hover:bg-[#a68829] transition text-sm uppercase"
								>
									REGISTER NOW
								</button>
							</div>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>

			{/* REGISTER MODAL */}
			<AnimatePresence>
				{registerFor && (
					<motion.div
						className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className="bg-white rounded-2xl w-full max-w-lg p-6 text-black max-h-[90vh] overflow-auto"
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
						>
							<div className="flex items-start justify-between mb-4">
								<div className="flex-1">
									<div className="text-xs text-gray-400 font-medium uppercase">
										{registerFor.type}
									</div>
									<h3 className="text-xl font-bold mt-1">{registerFor.title}</h3>
									<div className="text-xs text-gray-500 font-medium mt-1">
										{format(registerFor.start, "PPP p")}
									</div>
								</div>
								<button
									onClick={() => setRegisterFor(null)}
									className="p-2 hover:bg-gray-100 rounded transition flex-shrink-0"
								>
									<FiX size={20} />
								</button>
							</div>

							<form onSubmit={submitRegistration} className="space-y-4">
								<input
									required
									value={reg.name}
									onChange={(e) =>
										setReg((prev) => ({ ...prev, name: e.target.value }))
									}
									placeholder="FULL NAME"
									className="w-full p-3 border border-gray-300 rounded font-medium text-sm"
								/>
								<input
									required
									value={reg.email}
									onChange={(e) =>
										setReg((prev) => ({ ...prev, email: e.target.value }))
									}
									placeholder="EMAIL ADDRESS"
									type="email"
									className="w-full p-3 border border-gray-300 rounded font-medium text-sm"
								/>
								<div className="flex gap-2">
									<input
										required
										value={reg.tickets}
										onChange={(e) =>
											setReg((prev) => ({
												...prev,
												tickets: Math.max(1, Number(e.target.value || 1)),
											}))
										}
										type="number"
										min="1"
										placeholder="QTY"
										className="w-20 p-3 border border-gray-300 rounded font-medium text-sm"
									/>
									<input
										value={reg.notes}
										onChange={(e) =>
											setReg((prev) => ({ ...prev, notes: e.target.value }))
										}
										placeholder="NOTES (DIETARY, ACCESSIBILITY...)"
										className="flex-1 p-3 border border-gray-300 rounded font-medium text-sm"
									/>
								</div>

								<div className="flex gap-3 pt-2">
									<button
										type="submit"
										className="flex-1 py-3 rounded-md font-semibold text-white bg-[#bf9b30] hover:bg-[#a68829] transition uppercase text-sm"
									>
										CONFIRM REGISTRATION
									</button>
									<button
										type="button"
										className="flex-1 py-3 rounded-md border border-gray-300 font-semibold hover:bg-gray-50 transition uppercase text-sm"
										onClick={() => setRegisterFor(null)}
									>
										CANCEL
									</button>
								</div>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
