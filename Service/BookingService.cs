﻿using eTour.Model;
using eTour.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eTour.Service
{
    public class BookingService : IBookingService
    {
        private readonly Appdbcontext context;

        public BookingService(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Booking>> CreateBooking(Booking booking)
        {
            context.Bookings.Add(booking);
            await context.SaveChangesAsync();
            return booking;
        }

        public async Task<Booking> DeleteBooking(int booking_id)
        {
            Booking booking = context.Bookings.Find(booking_id);
            if (booking != null)
            {
                context.Bookings.Remove(booking);
                await context.SaveChangesAsync();
            }
            return booking;
        }

        public async Task<ActionResult<IEnumerable<Booking>>> GetAllBooking()
        {
            return await context.Bookings.ToListAsync();
        }

        public Task<ActionResult<Booking>?> GetBookingById(int booking_id)
        {
            var Booking = await context.Bookings.FindAsync(id);
            if (Booking == null)
            {
                return null;
            }
            return Booking;
        }

        public Task<ActionResult<Booking>> UpdateBooking(int booking_id, Booking booking)
        {
            if (Booking_id != Booking.Booking_Id)
            {
                return null;
            }

            context.Entry(Booking).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch
            {
                Console.WriteLine("Not Updated");
            }

            return Booking;
        }
    }
}
