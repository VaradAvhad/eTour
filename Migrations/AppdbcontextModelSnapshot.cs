﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using eTour.Repository;

#nullable disable

namespace eTour.Migrations
{
    [DbContext(typeof(Appdbcontext))]
    partial class AppdbcontextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("eTour.Model.Category", b =>
                {
                    b.Property<int>("Category_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Category_Id"));

                    b.Property<string>("Category_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Category_Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("eTour.Model.Iternery", b =>
                {
                    b.Property<int>("Iternery_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Iternery_Id"));

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Tour_Id")
                        .HasColumnType("int");

                    b.Property<int?>("ToursTour_Id")
                        .HasColumnType("int");

                    b.HasKey("Iternery_Id");

                    b.HasIndex("ToursTour_Id");

                    b.ToTable("Iterneries");
                });

            modelBuilder.Entity("eTour.Model.SubCategory", b =>
                {
                    b.Property<int>("Subcategory_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Subcategory_Id"));

                    b.Property<int>("Category_Id")
                        .HasColumnType("int");

                    b.Property<string>("Subcategory_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Subcategory_Id");

                    b.HasIndex("Category_Id");

                    b.ToTable("SubCategories");
                });

            modelBuilder.Entity("eTour.Model.TourDate", b =>
                {
                    b.Property<int>("Tourdate_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Tourdate_Id"));

                    b.Property<int>("Tour_Id")
                        .HasColumnType("int");

                    b.Property<string>("Validfrom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Validto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Tourdate_Id");

                    b.HasIndex("Tour_Id");

                    b.ToTable("TourDates");
                });

            modelBuilder.Entity("eTour.Model.Tours", b =>
                {
                    b.Property<int>("Tour_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Tour_Id"));

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<int?>("SubCategory")
                        .HasColumnType("int");

                    b.Property<string>("Tour_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Tour_Id");

                    b.HasIndex("SubCategory");

                    b.ToTable("Tour");
                });

            modelBuilder.Entity("eTour.Model.Iternery", b =>
                {
                    b.HasOne("eTour.Model.Tours", "Tours")
                        .WithMany("Iterneries")
                        .HasForeignKey("ToursTour_Id");

                    b.Navigation("Tours");
                });

            modelBuilder.Entity("eTour.Model.SubCategory", b =>
                {
                    b.HasOne("eTour.Model.Category", "Category")
                        .WithMany()
                        .HasForeignKey("Category_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("eTour.Model.TourDate", b =>
                {
                    b.HasOne("eTour.Model.Tours", "Tours")
                        .WithMany("Dates")
                        .HasForeignKey("Tour_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Tours");
                });

            modelBuilder.Entity("eTour.Model.Tours", b =>
                {
                    b.HasOne("eTour.Model.SubCategory", "Subcategory")
                        .WithMany("Tours")
                        .HasForeignKey("SubCategory");

                    b.Navigation("Subcategory");
                });

            modelBuilder.Entity("eTour.Model.SubCategory", b =>
                {
                    b.Navigation("Tours");
                });

            modelBuilder.Entity("eTour.Model.Tours", b =>
                {
                    b.Navigation("Dates");

                    b.Navigation("Iterneries");
                });
#pragma warning restore 612, 618
        }
    }
}
